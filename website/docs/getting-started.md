---
order: 2
---

# Getting Started

## Installation

### bun

```shell
bun add -D @bagaar/velvet-thunder tailwindcss @tailwindcss/forms
```

### npm

```shell
npm install -D @bagaar/velvet-thunder tailwindcss @tailwindcss/forms
```

### pnpm

```shell
pnpm add -D @bagaar/velvet-thunder tailwindcss @tailwindcss/forms
```

### yarn

```shell
yarn add -D @bagaar/velvet-thunder tailwindcss @tailwindcss/forms
```

## Configuration

### Tailwind v4

Tailwind v4 uses a CSS-first configuration approach. Add `@tailwindcss/forms` via `@plugin` directly in your CSS entry file, and keep a minimal `tailwind.config.js` for the Velvet Thunder plugin.

Because Tailwind v4 does not scan `node_modules` automatically, `velvetThunder.content()` is still needed to point Tailwind at the component files so it can include the structural styles.

`tailwind.config.js`:

```js
"use strict";

const velvetThunder = require("@bagaar/velvet-thunder/tailwind");

module.exports = {
  theme: {},
  content: [...velvetThunder.content()],
  plugins: [velvetThunder.plugin()],
};
```

Your CSS entry file:

```css
@import "tailwindcss/theme";
@import "tailwindcss/preflight";
@import "tailwindcss/utilities";

@plugin "@tailwindcss/forms";

@config "./tailwind.config.js";
```

Tailwind v4 emits native CSS nesting for plugin-generated component classes. To ensure variant classes like `.velvet-button-sm` are expanded to flat rules, add `postcss-nested` after `@tailwindcss/postcss` in your PostCSS config:

```shell
pnpm add -D postcss-nested
```

`postcss.config.js`:

```js
export default {
  plugins: {
    "@tailwindcss/postcss": {},
    "postcss-nested": {},
  },
};
```

### Tailwind v3

In `tailwind.config.js`:

```js
"use strict";

const tailwindFormsPlugin = require("@tailwindcss/forms");
const velvetThunder = require("@bagaar/velvet-thunder/tailwind");

module.exports = {
  content: [...velvetThunder.content()],
  plugins: [tailwindFormsPlugin({ strategy: "class" }), velvetThunder.plugin()],
};
```

## Styling

The plugin generates structural styles for all components but intentionally leaves out colors and visual theme. You apply those yourself by targeting the `velvet-*` CSS classes in your own stylesheet.

See [Customizing Styles](./styling.md) for a full guide.
