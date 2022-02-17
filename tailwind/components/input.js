'use strict';

const { reduceStyles } = require('../utils/styling');

module.exports = ({ colors }) => ({
  '.velvet-input': {
    '@apply bg-transparent border-gray-400/20': {},
    '@apply font-medium py-0 transition w-full': {},

    '&:hover': {
      '@apply border-gray-400/40': {},
    },

    '&:focus': {
      '@apply ring': {},

      ...reduceStyles(colors, (color) => ({
        [`&.velvet-input-${color}`]: {
          [`@apply border-${color}-400 ring-${color}-400/40`]: {},
        },
      })),
    },

    '&:disabled': {
      '@apply border-gray-400/10 cursor-not-allowed': {},
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

    '&-invalid': {
      '@apply border-red-400': {},
    },

    '&-rounded': {
      '@apply rounded-full': {},
    },
  },
});
