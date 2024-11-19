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
  plugins: [
    tailwindFormsPlugin({ strategy: "class" }),
    velvetThunder.plugin(),
  ],
};
```
