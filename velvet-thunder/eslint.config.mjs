import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import ember from 'eslint-plugin-ember/recommended';
import n from 'eslint-plugin-n';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores(['blueprints/*/files/', 'dist/', 'declarations/', 'coverage/']),
  js.configs.recommended,
  ember.configs.base,
  // browser files
  {
    files: ['src/**/*', 'unpublished-development-types/**/*'],
    languageOptions: {
      globals: globals.browser,
    },
  },
  // ts files
  {
    files: ['**/*.{ts,gts}'],
    extends: [tseslint.configs.recommended],
  },
  // gts files, after the ts block so ember-eslint-parser takes precedence over the ts parser
  ember.configs.gts,
  // node files
  {
    files: ['tailwind/**/*.cjs', '*.cjs', '*.mjs'],
    extends: [n.configs['flat/mixed-esm-and-cjs']],
  },
]);
