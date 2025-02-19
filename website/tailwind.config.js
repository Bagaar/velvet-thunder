'use strict';

const tailwindFormsPlugin = require('@tailwindcss/forms');
const tailwindTypographyPlugin = require('@tailwindcss/typography');
const velvetThunder = require('@bagaar/velvet-thunder/tailwind');

module.exports = {
  content: [
    ...velvetThunder.content(),
    './docs/**/*.md',
    './app/components/**/*.{hbs,ts}',
    './app/templates/**/*.hbs',
    './app/index.html',
  ],
  darkMode: 'class',
  plugins: [
    tailwindFormsPlugin({ strategy: 'class' }),
    tailwindTypographyPlugin,
    velvetThunder.plugin(),
  ],
};
