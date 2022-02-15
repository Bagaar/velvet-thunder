---
order: 2
---

# Getting Started

## Installation

### Ember

```shell
ember install velvet-thunder tailwindcss
```

### Yarn

```shell
yarn add velvet-thunder tailwindcss --dev
```

### npm

```shell
npm install velvet-thunder tailwindcss --save-dev
```

### pnpm

```shell
pnpm install velvet-thunder tailwindcss --dev
```

## Configuration

```js
// tailwind.config.js

'use strict';

const velvetThunderTailwindContent = require('velvet-thunder/tailwind/content');
const velvetThunderTailwindPlugin = require('velvet-thunder/tailwind/plugin');

module.exports = {
  content: [
    ...velvetThunderTailwindContent(),
  ],
  plugins: [
    velvetThunderTailwindPlugin({
      colors: ['green', 'orange', 'primary', 'red'],
    }),
  ],
};
```
