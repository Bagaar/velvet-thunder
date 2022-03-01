'use strict';

const { reduceStyles } = require('../utils/styling');

module.exports = ({ colors }) => ({
  '.velvet-checkbox': {
    '@apply flex items-center select-none w-fit': {},

    '&-sm': {
      '@apply text-sm': {},

      '.velvet-checkbox-input': {
        '@apply h-3 mr-1 rounded-sm w-3': {},
      },
    },

    '&-md': {
      '@apply text-base': {},

      '.velvet-checkbox-input': {
        '@apply h-4 mr-2 rounded w-4': {},
      },
    },

    '&-lg': {
      '@apply text-lg': {},

      '.velvet-checkbox-input': {
        '@apply h-5 mr-3 rounded-md w-5': {},
      },
    },

    '&-disabled': {
      '@apply cursor-not-allowed opacity-40': {},
    },

    ...reduceStyles(colors, (color) => ({
      [`&-${color}`]: {
        '.velvet-checkbox-input': {
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
      },
    })),

    '&-input': {
      '@apply bg-transparent border-gray-400/40 transition': {},

      '&:not(:checked):not(:disabled):not(:focus):hover': {
        '@apply border-gray-400/80': {},
      },

      '&:focus': {
        '@apply ring ring-offset-0': {},
      },

      '&:disabled': {
        '@apply cursor-not-allowed': {},
      },
    },
  },
});
