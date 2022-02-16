'use strict';

const { reduceStyles } = require('../utils/styling');

module.exports = ({ colors }) => ({
  '.velvet-input': {
    '@apply bg-transparent border-2 border-gray-400/20 font-medium': {},
    '@apply outline-none transition': {},

    '&:focus': reduceStyles(colors, (color) => ({
      [`&.velvet-input-${color}`]: {
        [`@apply ring ring-${color}-400/50`]: {},
      },
    })),

    '&-disabled': {
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

    '&-rounded': {
      '@apply rounded-full': {},
    },

    '&-invalid': {
      '@apply border-red-400': {},

      '&:focus': {
        '@apply border-gray-400/20': {},
      },
    },
  },
});
