import { fixBadDeclarationOutput } from 'fix-bad-declaration-output';

await fixBadDeclarationOutput('declarations/**/*.d.ts', [
  ['TypeScript#56571', { types: 'all' }],
  'Glint#628',
  'Glint#697',
]);
