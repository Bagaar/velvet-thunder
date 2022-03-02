'use strict';

const { reduceStyles } = require('../utils/styling');

module.exports = ({ colors }) => ({
  '.velvet-input': {
    '@apply bg-transparent border-gray-400/40': {},
    '@apply font-medium py-0 transition w-full': {},

    '&:not(.velvet-input-invalid):not(:disabled):not(:focus):hover': {
      '@apply border-gray-400/80': {},
    },

    '&:focus': {
      '@apply ring': {},
    },

    '&:disabled': {
      '@apply cursor-not-allowed opacity-40': {},
    },

    '&-sm': {
      '@apply h-6 px-3 rounded text-sm': {},
    },

    '&-md': {
      '@apply h-8 px-4 rounded-md text-base': {},
    },

    '&-lg': {
      '@apply h-10 px-5 rounded-lg text-lg': {},
    },

    '&-rounded': {
      '@apply rounded-full': {},
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
