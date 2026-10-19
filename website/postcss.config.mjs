// Only used by the Tailwind v4 build (`pnpm tailwind:build:v4`), following the
// Tailwind v4 setup described in docs/getting-started.md: `postcss-nested` must
// run after `@tailwindcss/postcss` to flatten the plugin's `&-{variant}` rules.
// The Tailwind v3 CLI ignores this file.
export default {
  plugins: {
    "@tailwindcss/postcss": {},
    "postcss-nested": {},
  },
};
