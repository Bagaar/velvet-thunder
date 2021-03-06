'use strict';

const { reduceStyles } = require('../utils/styling');

module.exports = ({ colors, theme }) => ({
  '.velvet-select': {
    '@apply bg-transparent border-gray-400/40': {},
    '@apply font-medium py-0 transition w-full': {},

    '&:not(.velvet-select-invalid):not(:disabled):not(:focus):hover': {
      '@apply border-gray-400/80': {},
    },

    '&:focus': {
      '@apply ring': {},
    },

    '&:disabled': {
      '@apply cursor-not-allowed opacity-40': {},
    },

    '&-sm': {
      '@apply h-6 pl-3 pr-10 rounded text-sm': {},
      [`@apply bg-[right_${theme('spacing.2')}_center]`]: {},
    },

    '&-md': {
      '@apply h-8 pl-4 pr-12 rounded-md text-base': {},
      [`@apply bg-[right_${theme('spacing.3')}_center]`]: {},
    },

    '&-lg': {
      '@apply h-10 pl-5 pr-14 rounded-lg text-lg': {},
      [`@apply bg-[right_${theme('spacing.4')}_center]`]: {},
    },

    '&-placeholder': {
      '@apply text-gray-400/40': {},
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
