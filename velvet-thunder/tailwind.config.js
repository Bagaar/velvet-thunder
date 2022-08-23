'use strict';

const tailwindFormsPlugin = require('@tailwindcss/forms');
const tailwindTypographyPlugin = require('@tailwindcss/typography');
const velvetThunder = require('./tailwind');

module.exports = {
  content: [
    ...velvetThunder.content(),
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
    velvetThunder.plugin({
      colors: ['amber', 'emerald', 'primary', 'rose'],
    }),
  ],
  theme: {
    extend: {},
  },
};
