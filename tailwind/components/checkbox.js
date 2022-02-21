'use strict';

const { reduceStyles } = require('../utils/styling');

module.exports = ({ colors }) => ({
  '.velvet-checkbox': {
    '@apply bg-transparent border-gray-400/20 transition': {},

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
      '@apply h-3 rounded-sm w-3': {},
    },

    '&-md': {
      '@apply h-4 rounded w-4': {},
    },

    '&-lg': {
      '@apply h-5 rounded-md w-5': {},
    },

    '&-invalid': {
      '@apply border-rose-400': {},
    },

    ...reduceStyles(colors, (color) => ({
      [`&-${color}`]: {
        '&:focus': {
          [`@apply border-${color}-400 ring-${color}-400/40`]: {},
        },

        '&:indeterminate': {
          [`@apply bg-${color}-400`]: {},

          '&:hover': {
            [`@apply bg-${color}-400`]: {},
          },

          '&:focus': {
            [`@apply bg-${color}-400`]: {},
          },
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
