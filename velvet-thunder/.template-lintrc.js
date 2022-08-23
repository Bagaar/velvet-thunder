'use strict';

module.exports = {
  extends: [
    'a11y',
    'ember-template-lint-plugin-prettier:recommended',
    'recommended',
  ],
  overrides: [
    {
      files: ['**/tests/integration/**/*.js'],
      rules: {
        // Doesn't work reliably for inline templates.
        prettier: false,
      },
    },
  ],
  plugins: ['ember-template-lint-plugin-prettier'],
};
