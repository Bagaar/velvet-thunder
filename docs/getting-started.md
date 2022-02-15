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

const velvetThunderTailwindPlugin = require('velvet-thunder/tailwind/plugin');

module.exports = {
  plugins: [
    velvetThunderTailwindPlugin({
      colors: ['green', 'orange', 'primary', 'red'],
    }),
  ],
};
```
