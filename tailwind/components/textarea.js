'use strict';

const { reduceStyles } = require('../utils/styling');

module.exports = ({ colors }) => ({
  '.velvet-textarea': {
    '@apply bg-transparent border-gray-400/40': {},
    '@apply font-medium transition w-full': {},
    '@apply placeholder:opacity-40 placeholder:text-inherit': {},

    '&:not(.velvet-textarea-invalid):not(:disabled):not(:focus):hover': {
      '@apply border-gray-400/80': {},
    },

    '&:focus': {
      '@apply ring': {},
    },

    '&:disabled': {
      '@apply cursor-not-allowed opacity-40': {},
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

    ...reduceStyles(colors, (color) => ({
      [`&-${color}`]: {
        '&:focus': {
          [`@apply border-${color}-400 ring-${color}-400/40`]: {},
        },
      },
    })),

    '&-invalid': {
      '@apply border-rose-400': {},
    },
  },
});
