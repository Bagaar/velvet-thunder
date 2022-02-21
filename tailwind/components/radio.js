'use strict';

const { reduceStyles } = require('../utils/styling');

module.exports = ({ colors }) => ({
  '.velvet-radio': {
    '@apply bg-transparent border-gray-400/20 rounded-full transition': {},

    '&:hover': {
      '@apply border-gray-400/40': {},
    },

    '&:focus': {
      '@apply ring ring-offset-0': {},
    },

    '&:disabled': {
      '@apply border-gray-400/10 cursor-not-allowed': {},
    },

    '&-sm': {
      '@apply h-3 w-3': {},
    },

    '&-md': {
      '@apply h-4 w-4': {},
    },

    '&-lg': {
      '@apply h-5 w-5': {},
    },

    '&-invalid': {
      '@apply border-rose-400': {},
    },

    ...reduceStyles(colors, (color) => ({
      [`&-${color}`]: {
        '&:focus': {
          [`@apply border-${color}-400 ring-${color}-400/40`]: {},
        },

        '&:checked': {
          [`@apply bg-${color}-400`]: {},

          '&:hover': {
            [`@apply bg-${color}-400`]: {},
          },

          '&:focus': {
            [`@apply bg-${color}-400`]: {},
          },
        },
      },
    })),
  },
});
