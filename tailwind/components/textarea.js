'use strict';

const { reduceStyles } = require('../utils/styling');

module.exports = ({ colors }) => ({
  '.velvet-textarea': {
    '@apply bg-transparent border border-gray-400/20 font-medium': {},
    '@apply outline-none transition': {},

    '&:focus': reduceStyles(colors, (color) => ({
      [`&.velvet-textarea-${color}`]: {
        [`@apply border-${color}-400 ring ring-${color}-400/50`]: {},
      },
    })),

    '&-disabled': {
      '@apply border-gray-400/10 cursor-not-allowed': {},
    },

    '&-sm': {
      '@apply h-16 px-3 py-2 rounded text-sm': {},
    },

    '&-md': {
      '@apply h-24 px-4 py-3 rounded-md text-base': {},
    },

    '&-lg': {
      '@apply h-32 px-5 py-4 rounded-lg text-lg': {},
    },

    '&-invalid': {
      '@apply border-red-400': {},
    },
  },
});
