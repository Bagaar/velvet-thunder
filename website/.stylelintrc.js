'use strict';

module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    'at-rule-no-unknown': [true, { ignoreAtRules: ['config'] }],
    'at-rule-prelude-no-invalid': [true, { ignoreAtRules: ['apply'] }],
    'import-notation': 'string',
    'selector-class-pattern': null,
  },
};
