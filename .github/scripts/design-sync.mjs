#!/usr/bin/env node
// ============================================================
// .github/scripts/design-sync.mjs
//
// Runs as part of the Design System Sync GitHub Action.
// Steps:
//   1. Fetch current design system state from Figma API
//   2. Load last snapshot from repo (if exists)
//   3. Diff current state vs snapshot
//   4. Call Claude to generate tokens.cjs + changelog entry
//   5. Create branch, commit files, open PR
// ============================================================

import { execSync } from 'node:child_process';
import { writeFileSync, readFileSync, existsSync } from 'node:fs';
import { mkdirSync } from 'node:fs';

const {
  ANTHROPIC_API_KEY,
  FIGMA_ACCESS_TOKEN,
  FIGMA_FILE_KEY,
  GITHUB_TOKEN,
  VERSION_BUMP = 'minor',
  GITHUB_REPOSITORY,
  GITHUB_SHA,
} = process.env;

const [OWNER, REPO] = GITHUB_REPOSITORY.split('/');
const SNAPSHOT_PATH   = 'velvet-thunder/design-sync/snapshot.json';
const TOKENS_PATH     = 'velvet-thunder/tailwind/tokens.cjs';
const BASE_BRANCH     = 'main';

// ── 1. Fetch Figma state ──────────────────────────────────────

async function fetchFigmaState() {
  console.log('📐 Fetching Figma file state...');

  const res = await fetch(
    `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/variables/local`,
    { headers: { 'X-Figma-Token': FIGMA_ACCESS_TOKEN } }
  );

  if (!res.ok) throw new Error(`Figma API error: ${res.status} ${await res.text()}`);
  const data = await res.json();

  const tokens = {};
  const variables = Object.values(data.meta?.variables ?? {});
  const collections = data.meta?.variableCollections ?? {};

  for (const v of variables) {
    const col = collections[v.variableCollectionId];
    if (!col) continue;
    const modeId = col.defaultModeId;
    let val = v.valuesByMode[modeId];

    // Resolve aliases
    let depth = 0;
    while (val?.type === 'VARIABLE_ALIAS' && depth < 10) {
      const ref = variables.find(x => x.id === val.id);
      if (!ref) break;
      const refCol = collections[ref.variableCollectionId];
      val = ref.valuesByMode[refCol?.defaultModeId];
      depth++;
    }

    let output = null;
    if (v.resolvedType === 'COLOR' && val?.r !== undefined) {
      const toHex = (r, g, b, a) => {
        const hex = [r, g, b].map(v => Math.round(v * 255).toString(16).padStart(2, '0')).join('');
        return a !== undefined && a < 0.999
          ? '#' + hex + Math.round(a * 255).toString(16).padStart(2, '0')
          : '#' + hex;
      };
      output = toHex(val.r, val.g, val.b, val.a);
    } else if (v.resolvedType === 'FLOAT') {
      output = val;
    }

    tokens[v.name] = { type: v.resolvedType, value: output };
  }

  // Also fetch components
  const fileRes = await fetch(
    `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}`,
    { headers: { 'X-Figma-Token': FIGMA_ACCESS_TOKEN } }
  );
  const fileData = await fileRes.json();
  const components = {};

  function walk(node, pageName) {
    if (node.type === 'COMPONENT_SET') {
      components[node.name] = {
        page: pageName,
        id: node.id,
        variants: (node.children ?? []).map(c => c.name),
      };
    } else if (node.type === 'COMPONENT' && node.parent?.type !== 'COMPONENT_SET') {
      components[node.name] = { page: pageName, id: node.id, variants: [] };
    }
    for (const child of node.children ?? []) walk(child, pageName);
  }

  for (const page of fileData.document?.children ?? []) {
    walk(page, page.name);
  }

  return { tokens, components, exportedAt: new Date().toISOString() };
}

// ── 2. Load snapshot ──────────────────────────────────────────

function loadSnapshot() {
  if (existsSync(SNAPSHOT_PATH)) {
    return JSON.parse(readFileSync(SNAPSHOT_PATH, 'utf8'));
  }
  return null;
}

// ── 3. Diff ───────────────────────────────────────────────────

function diff(current, snapshot) {
  if (!snapshot) return [{ type: 'INITIAL', description: 'Initial design system baseline' }];

  const changes = [];

  for (const [name, comp] of Object.entries(current.components)) {
    if (!snapshot.components?.[name]) {
      changes.push({ type: 'NEW_COMPONENT', description: `${name} — new component added` });
    } else {
      const snap = snapshot.components[name];
      for (const v of comp.variants.filter(v => !snap.variants.includes(v)))
        changes.push({ type: 'VARIANT_ADDED', description: `${name} — variant added: ${v}` });
      for (const v of snap.variants.filter(v => !comp.variants.includes(v)))
        changes.push({ type: 'VARIANT_REMOVED', description: `${name} — variant removed: ${v}` });
    }
  }
  for (const name of Object.keys(snapshot.components ?? {})) {
    if (!current.components[name])
      changes.push({ type: 'REMOVED_COMPONENT', description: `${name} — component removed` });
  }
  for (const [name, token] of Object.entries(current.tokens)) {
    if (!snapshot.tokens?.[name])
      changes.push({ type: 'TOKEN_ADDED', description: `${name} — NEW → ${token.value}` });
    else if (snapshot.tokens[name].value !== token.value)
      changes.push({ type: 'TOKEN_CHANGED', description: `${name} — ${snapshot.tokens[name].value} → ${token.value}` });
  }
  for (const name of Object.keys(snapshot.tokens ?? {})) {
    if (!current.tokens[name])
      changes.push({ type: 'TOKEN_REMOVED', description: `${name} — removed` });
  }

  return changes;
}

// ── 4. Call Claude to generate files ──────────────────────────

async function generateWithClaude(figmaState, changes, version) {
  console.log('🤖 Calling Claude to generate token files...');

  const systemPrompt = `You are the Velvet Thunder design system sync agent for an Ember.js + Tailwind CSS addon called @bagaar/velvet-thunder.

Given the current Figma token state, generate:
1. A tailwind tokens.cjs file that exports Figma tokens as a Tailwind theme extension
2. A concise PR description

The tokens.cjs file must:
- Use CommonJS (module.exports)
- Export an object with "theme" and "extend" keys suitable for spreading into tailwind.config.js
- Group colors by their semantic meaning (brand, neutral, background, surface, text, stroke)
- Convert corner radius float values to px strings
- Include a comment header showing it's auto-generated

Respond ONLY with valid JSON, no markdown, no backticks:
{
  "tokensCjs": "<full file content>",
  "prDescription": "<markdown PR description>"
}`;

  const userPrompt = `Version: ${version}
Changes detected:
${changes.map(c => `- ${c.description}`).join('\n')}

Current Figma tokens:
${JSON.stringify(figmaState.tokens, null, 2)}`;

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4096,
      system: systemPrompt,
      messages: [{ role: 'user', content: userPrompt }],
    }),
  });

  const data = await res.json();
  const text = data.content?.[0]?.text ?? '{}';
  return JSON.parse(text.replace(/```json|```/g, '').trim());
}

// ── 5. Bump version ───────────────────────────────────────────

function bumpVersion(current, bump) {
  if (!current) return 'v1.0';
  const parts = current.replace('v', '').split('.').map(Number);
  const [major, minor, patch] = [parts[0] ?? 1, parts[1] ?? 0, parts[2] ?? 0];
  if (bump === 'major') return `v${major + 1}.0`;
  if (bump === 'minor') return `v${major}.${minor + 1}`;
  return `v${major}.${minor}.${patch + 1}`;
}

// ── 6. GitHub API helpers ─────────────────────────────────────

const ghHeaders = {
  Authorization: `Bearer ${GITHUB_TOKEN}`,
  Accept: 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
  'Content-Type': 'application/json',
};

async function ghGet(path) {
  const res = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/${path}`, { headers: ghHeaders });
  if (!res.ok) return null;
  return res.json();
}

async function ghPut(path, body) {
  const res = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/${path}`, {
    method: 'PUT', headers: ghHeaders, body: JSON.stringify(body),
  });
  return res.json();
}

async function ghPost(path, body) {
  const res = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/${path}`, {
    method: 'POST', headers: ghHeaders, body: JSON.stringify(body),
  });
  return res.json();
}

async function upsertFile(path, content, message, branch) {
  const existing = await ghGet(`contents/${path}?ref=${branch}`);
  return ghPut(`contents/${path}`, {
    message,
    content: Buffer.from(content).toString('base64'),
    branch,
    ...(existing?.sha ? { sha: existing.sha } : {}),
  });
}

// ── Main ──────────────────────────────────────────────────────

async function main() {
  // 1. Fetch current state from Figma
  const figmaState = await fetchFigmaState();

  // 2. Load last snapshot
  const snapshot = loadSnapshot();

  // 3. Diff
  const changes = diff(figmaState, snapshot);

  if (changes.length === 0) {
    console.log('✅ No changes detected. Design system is in sync.');
    process.exit(0);
  }

  console.log(`🔍 ${changes.length} change(s) detected:`);
  changes.forEach(c => console.log(`   - ${c.description}`));

  // 4. Determine version
  const version = bumpVersion(snapshot?.version, VERSION_BUMP);
  console.log(`📦 Version: ${version}`);

  // 5. Generate files via Claude
  const generated = await generateWithClaude(figmaState, changes, version);

  // 6. Create branch
  const mainRef = await ghGet(`git/ref/heads/${BASE_BRANCH}`);
  const mainSha = mainRef?.object?.sha;
  const slug = changes[0]?.description?.split(' ')[0]?.toLowerCase().replace(/[^a-z0-9]/g, '-') ?? 'update';
  const branch = `design-sync/${version.replace('v', 'v')}-${slug}`;

  console.log(`🌿 Creating branch: ${branch}`);
  await ghPost('git/refs', { ref: `refs/heads/${branch}`, sha: mainSha });

  // 7. Commit files
  console.log('📝 Committing files...');

  // Update snapshot
  const newSnapshot = { ...figmaState, version, exportedAt: new Date().toISOString() };
  await upsertFile(
    SNAPSHOT_PATH,
    JSON.stringify(newSnapshot, null, 2),
    `design-sync: update snapshot to ${version}`,
    branch
  );

  // Commit tokens.cjs
  await upsertFile(
    TOKENS_PATH,
    generated.tokensCjs,
    `design-sync: update tailwind tokens for ${version}`,
    branch
  );

  // 8. Open PR
  console.log('🚀 Opening PR...');
  const pr = await ghPost('pulls', {
    title: `⚡️ Design System Sync — ${version}`,
    body: generated.prDescription,
    head: branch,
    base: BASE_BRANCH,
  });

  console.log(`✅ PR opened: ${pr.html_url}`);
}

main().catch(err => {
  console.error('❌ Sync failed:', err.message);
  process.exit(1);
});
