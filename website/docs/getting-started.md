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
