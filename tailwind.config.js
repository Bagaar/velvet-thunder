'use strict';

const velvetThunderTailwindContent = require('./tailwind/content');
const velvetThunderTailwindPlugin = require('./tailwind/plugin');

module.exports = {
  content: [
    ...velvetThunderTailwindContent('.'),
    './tests/dummy/app/components/**/*.{hbs,js}',
    './tests/dummy/app/templates/**/*.hbs',
    './tests/dummy/app/index.html',
  ],
  plugins: [velvetThunderTailwindPlugin()],
  theme: {
    extend: {},
  },
};
