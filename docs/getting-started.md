---
order: 2
---

# Getting Started

## Installation

### Yarn

```shell
yarn add velvet-thunder tailwindcss @tailwindcss/forms --dev
```

### npm

```shell
npm install velvet-thunder tailwindcss @tailwindcss/forms --save-dev
```

### pnpm

```shell
pnpm install velvet-thunder tailwindcss @tailwindcss/forms --dev
```

## Configuration

```js
// tailwind.config.js

"use strict";

const tailwindFormsPlugin = require("@tailwindcss/forms");
const velvetThunder = require("velvet-thunder/tailwind");

module.exports = {
  content: [...velvetThunder.content()],
  plugins: [
    tailwindFormsPlugin({
      strategy: "class",
    }),
    velvetThunder.plugin(),
  ],
};
```
