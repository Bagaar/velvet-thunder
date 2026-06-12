'use strict';

module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    'at-rule-no-unknown': [true, { ignoreAtRules: ['config'] }],
    'import-notation': 'string',
    'selector-class-pattern': null,
  },
};
