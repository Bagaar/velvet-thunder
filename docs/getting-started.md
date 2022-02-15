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

const velvetThunderPlugin = require('velvet-thunder/tailwind/plugin');

module.exports = {
  plugins: [
    velvetThunderPlugin({
      colors: ['green', 'orange', 'primary', 'red'],
    }),
  ],
};
```
