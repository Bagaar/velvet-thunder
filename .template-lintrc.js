'use strict';

module.exports = {
  extends: ['a11y', 'recommended', 'stylistic'],
  rules: {
    // TEMP disable `modifier-name-case` until the following PR is released:
    // https://github.com/ember-template-lint/ember-template-lint/pull/2348
    'modifier-name-case': false,
  },
};
