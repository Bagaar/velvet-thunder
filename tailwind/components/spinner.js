'use strict';

const { reduceStyles } = require('../utils/styling');

module.exports = ({ colors }) => ({
  '.velvet-spinner': {
    '@apply animate-spin': {},

    '&-sm': {
      '@apply h-3 w-3': {},
    },

    '&-md': {
      '@apply h-4 w-4': {},
    },

    '&-lg': {
      '@apply h-5 w-5': {},
    },

    '&-track': {
      '@apply opacity-20': {},
    },

    ...reduceStyles(colors, (color) => ({
      [`&-${color}`]: {
        [`@apply text-${color}-400`]: {},
      },
    })),
  },
});
