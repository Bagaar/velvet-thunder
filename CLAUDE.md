# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Velvet Thunder** is a semi-headless UI component library for Ember.js built with Tailwind CSS. It is a pnpm monorepo with three packages:
- `velvet-thunder/` — the v2 addon (the actual component library)
- `test-app/` — QUnit integration test suite
- `website/` — documentation site (Docfy-powered, hosted at velvet-thunder.netlify.app)

## Commands

All commands are run from the monorepo root unless noted.

### Development
```sh
pnpm start              # Start all three packages concurrently (addon watch + test-app on :4200 + website on :4202)
```

### Building
```sh
pnpm build              # Build all packages
```

Within a package, Tailwind must be built before Ember:
```sh
pnpm --filter test-app build       # Tailwind then Ember build
pnpm --filter website build        # Tailwind then Ember build
```

### Testing
```sh
pnpm test               # Run tests in all packages
pnpm --filter test-app test        # Run tests for just the test app
```

Tests live in `test-app/tests/integration/components/`. There are no tests in the `velvet-thunder/` addon itself.

### Linting
```sh
pnpm lint               # Lint all packages
pnpm lint:fix           # Auto-fix lint issues across all packages
```

Individual lint commands within a package:
```sh
pnpm lint:hbs           # Template linting (ember-template-lint)
pnpm lint:js            # ESLint
pnpm lint:format        # Prettier
pnpm lint:types         # TypeScript / Glint type checking
pnpm lint:css           # Stylelint (website only)
```

## Architecture

### Component Format (.gts)
All addon components use `.gts` (Glimmer Template Script) files — TypeScript with embedded Glimmer templates. Each component defines a typed `Signature` interface with `Args`, `Blocks`, and `Element`. Example structure:

```typescript
interface VelvetButtonSignature {
  Args: { size?: 'sm' | 'md' | 'lg'; disabled?: boolean; };
  Blocks: { default: [{ class: string }] };
  Element: HTMLButtonElement;
}
```

Many components support a **renderless mode**: when a default block is provided, they yield class names back to the caller instead of rendering their own markup.

### Styling Pattern
The addon ships a **Tailwind plugin** (`velvet-thunder/tailwind/`) that defines all component styles using `@apply` directives. Consumer apps must add this plugin to their `tailwind.config.js`. CSS class naming convention: `velvet-{component}`, `velvet-{component}-{variant}`, `velvet-{component}-{size}`, `velvet-{component}-disabled`.

The `cn()` helper in `velvet-thunder/src/-private/helpers/cn.ts` handles conditional class composition throughout the addon.

### Build System
The `velvet-thunder/` package is a **v2 Ember addon** built with Rollup (`rollup.config.mjs`). TypeScript declarations are generated via Glint. The `addon-main.cjs` handles app-js rewrites for the v2 addon format.

Consumer apps (`test-app/`, `website/`) use **Embroider** (`ember-cli-build.js`) for their Ember builds.

### Testing Conventions
Integration tests use `qunit-dom` for DOM assertions and `@ember/test-helpers`. Tests verify: rendered class names, HTML attributes, event handling, disabled states, and block/renderless variants. See any file in `test-app/tests/integration/components/` for the pattern.

### Tailwind Plugin (`velvet-thunder/tailwind/`)
The plugin registers all component styles into the consumer's Tailwind build via `addComponents`. Each component file exports a function returning a CSS-in-JS object that uses `@apply` to compose Tailwind utilities into named classes (e.g. `.velvet-button`, `.velvet-button-sm`). A small `velvet-outline` utility is added via `addUtilities` and used internally for focus styles.

The plugin also safelists `/^velvet-/` so Tailwind never purges those classes — necessary because class names are composed dynamically at runtime and can't be statically scanned. `content.cjs` additionally points Tailwind at the addon's built JS files for scanning.

Consumers can opt out of individual components by passing `{ components: { button: false } }` to the plugin.

### Key Dependencies
- **Glint** — TypeScript support in Glimmer templates
- **Floating UI** — Positioning for dropdowns and tooltips
- **@formkit/auto-animate** — Animation via the `velvet-auto-animate` modifier
- **Tailwind CSS** + `@tailwindcss/forms` — All visual styling
- **ember-link**, **ember-truth-helpers**, **ember-modifier** — Template utilities
- **pnpm v10 + Volta** — Package manager and Node version management (Node 18+ required)
