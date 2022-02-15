'use strict';

const tailwindTypographyPlugin = require('@tailwindcss/typography');
const velvetThunderTailwindPlugin = require('./tailwind/plugin');

module.exports = {
  content: [
    './tests/dummy/app/components/**/*.{hbs,js}',
    './tests/dummy/app/templates/**/*.hbs',
    './tests/dummy/app/index.html',
  ],
  darkMode: 'class',
  plugins: [
    tailwindTypographyPlugin,
    velvetThunderTailwindPlugin({
      colors: ['green', 'orange', 'primary', 'red'],
    }),
  ],
  theme: {
    extend: {},
  },
};
