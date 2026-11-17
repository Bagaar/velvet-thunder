'use strict';

const tailwindFormsPlugin = require('@tailwindcss/forms');
const velvetThunder = require('@bagaar/velvet-thunder/tailwind');

module.exports = {
  content: [...velvetThunder.content(), './tests/integration/**/*-test.ts'],
  plugins: [tailwindFormsPlugin({ strategy: 'class' }), velvetThunder.plugin()],
};
