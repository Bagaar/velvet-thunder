import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import ember from "eslint-plugin-ember/recommended";
import n from "eslint-plugin-n";
import qunit from "eslint-plugin-qunit/configs/recommended";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  globalIgnores([
    "blueprints/*/files/",
    "dist/",
    "coverage/",
    ".node_modules.ember-try/",
  ]),
  js.configs.recommended,
  ember.configs.base,
  // browser files
  {
    files: ["app/**/*", "tests/**/*", "types/**/*"],
    languageOptions: {
      globals: globals.browser,
    },
  },
  // ts files
  {
    files: ["**/*.ts"],
    extends: [tseslint.configs.recommended],
  },
  // node files
  {
    files: [
      "*.{js,cjs,mjs}",
      "blueprints/*/index.js",
      "config/**/*.js",
      "lib/*/index.js",
      "server/**/*.js",
    ],
    extends: [n.configs["flat/mixed-esm-and-cjs"]],
  },
  // test files
  {
    files: ["tests/**/*-test.{js,ts}"],
    extends: [qunit],
  },
]);
