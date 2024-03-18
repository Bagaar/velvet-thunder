'use strict';

const tailwindFormsPlugin = require('@tailwindcss/forms');
// TODO: False positive?
// eslint-disable-next-line n/no-missing-require
const velvetThunder = require('velvet-thunder/tailwind');

module.exports = {
  content: [...velvetThunder.content(), './tests/integration/**/*-test.ts'],
  plugins: [tailwindFormsPlugin({ strategy: 'class' }), velvetThunder.plugin()],
};
