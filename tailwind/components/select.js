'use strict';

const { reduceStyles } = require('../utils/styling');

module.exports = ({ colors, theme }) => ({
  '.velvet-select': {
    '@apply bg-transparent border-gray-400/20': {},
    '@apply font-medium py-0 transition w-full': {},

    '&:hover': {
      '@apply border-gray-400/40': {},
    },

    '&:focus': {
      '@apply ring': {},

      ...reduceStyles(colors, (color) => ({
        [`&.velvet-select-${color}`]: {
          [`@apply border-${color}-400 ring-${color}-400/40`]: {},
        },
      })),
    },

    '&:disabled': {
      '@apply border-gray-400/10 cursor-not-allowed text-gray-400/40': {},
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

    '&-invalid': {
      '@apply border-red-400': {},
    },

    '&-placeholder': {
      '@apply text-gray-400/40': {},
    },

    '&-rounded': {
      '@apply rounded-full': {},
    },
  },
});
