'use strict';

const tailwindFormsPlugin = require('@tailwindcss/forms');
const tailwindTypographyPlugin = require('@tailwindcss/typography');
const velvetThunderContent = require('./tailwind/content');
const velvetThunderPlugin = require('./tailwind/plugin');

module.exports = {
  content: [
    ...velvetThunderContent('.'),
    './docs/**/*.md',
    './tests/dummy/app/components/**/*.{hbs,js}',
    './tests/dummy/app/templates/**/*.hbs',
    './tests/dummy/app/index.html',
  ],
  darkMode: 'class',
  plugins: [
    tailwindFormsPlugin({
      strategy: 'class',
    }),
    tailwindTypographyPlugin,
    velvetThunderPlugin({
      colors: ['amber', 'emerald', 'primary', 'rose'],
    }),
  ],
  theme: {
    extend: {},
  },
};
