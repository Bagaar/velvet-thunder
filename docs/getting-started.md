---
order: 2
---

# Getting Started

## Installation

### Ember

```shell
ember install velvet-thunder tailwindcss @tailwindcss/forms
```

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

'use strict';

const tailwindFormsPlugin = require('@tailwindcss/forms');
const velvetThunderContent = require('velvet-thunder/tailwind/content');
const velvetThunderPlugin = require('velvet-thunder/tailwind/plugin');

module.exports = {
  content: [...velvetThunderContent()],
  plugins: [
    tailwindFormsPlugin({
      strategy: 'class',
    }),
    velvetThunderPlugin({
      colors: ['amber', 'emerald', 'primary', 'rose'],
    }),
  ],
};
```
