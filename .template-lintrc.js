'use strict';

module.exports = {
  extends: ['a11y', 'recommended', 'stylistic'],
  overrides: [
    {
      files: ['**/tests/integration/**/*.js'],
      rules: {
        // These don't work reliably for inline templates.
        'block-indentation': false,
        'eol-last': false,
        'no-multiple-empty-lines': false,
      },
    },
  ],
};
