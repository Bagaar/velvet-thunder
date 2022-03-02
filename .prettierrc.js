'use strict';

module.exports = {
  overrides: [
    {
      files: '*.{hbs,yml}',
      options: {
        singleQuote: false,
      },
    },
  ],
  singleQuote: true,
};
