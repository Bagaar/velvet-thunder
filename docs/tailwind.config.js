'use strict';

const tailwindFormsPlugin = require('@tailwindcss/forms');
const tailwindTypographyPlugin = require('@tailwindcss/typography');
const velvetThunder = require('velvet-thunder/tailwind');

module.exports = {
  content: [
    ...velvetThunder.content(),
    './docs/**/*.md',
    './app/components/**/*.{hbs,js}',
    './app/templates/**/*.hbs',
    './app/index.html',
  ],
  darkMode: 'class',
  plugins: [
    tailwindFormsPlugin({
      strategy: 'class',
    }),
    tailwindTypographyPlugin,
    velvetThunder.plugin({
      colors: ['amber', 'emerald', 'primary', 'rose'],
    }),
  ],
  theme: {
    extend: {},
  },
};
