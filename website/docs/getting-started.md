---
order: 2
---

# Getting Started

## Installation

### bun

```shell
bun add -D @bagaar/velvet-thunder tailwindcss @tailwindcss/forms postcss-nested
```

### npm

```shell
npm install -D @bagaar/velvet-thunder tailwindcss @tailwindcss/forms postcss-nested
```

### pnpm

```shell
pnpm add -D @bagaar/velvet-thunder tailwindcss @tailwindcss/forms postcss-nested
```

### yarn

```shell
yarn add -D @bagaar/velvet-thunder tailwindcss @tailwindcss/forms postcss-nested
```

## Configuration

### Tailwind v4

Tailwind v4 supports two approaches. Both require `postcss-nested` in the PostCSS pipeline so that plugin-generated variant classes like `.velvet-button-sm` are expanded to flat rules. Both also require an explicit source declaration because Tailwind v4 does not scan `node_modules` automatically.

Add `postcss-nested` after `@tailwindcss/postcss` in your PostCSS config:

```js
export default {
  plugins: {
    "@tailwindcss/postcss": {},
    "postcss-nested": {},
  },
};
```

#### Option A: CSS-first (no JS config)

Load both plugins via `@plugin` directly in your CSS entry file. Use `@source` to point Tailwind at the Velvet Thunder component files:

```css
@import "tailwindcss/theme";
@import "tailwindcss/preflight";
@import "tailwindcss/utilities";

@source "../node_modules/@bagaar/velvet-thunder";

@plugin "@bagaar/velvet-thunder/tailwind/plugin";
@plugin "@tailwindcss/forms";
```

#### Option B: JS config file

Keep a `tailwind.config.js` and load it via `@config`. The forms plugin can be added either in the JS config or as a `@plugin` in CSS.

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
