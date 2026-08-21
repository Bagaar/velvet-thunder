'use strict';

module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'config',
          'tailwind',
          'apply',
          'layer',
          'screen',
          'variants',
          'responsive',
        ],
      },
    ],
    'import-notation': 'string',
    'selector-class-pattern': null,
  },
};
