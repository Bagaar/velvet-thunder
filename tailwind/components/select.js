'use strict';

module.exports = ({ theme }) => ({
  '.velvet-select': {
    '@apply py-0 rounded-md text-sm transition w-full': {},

    '&:focus': {
      '@apply outline outline-2 outline-offset-0 ring-0': {},
    },

    '&:disabled': {
      '@apply cursor-not-allowed': {},
    },

    '&-sm': {
      '@apply h-8 pl-2 pr-10': {},
      [`@apply bg-[right_${theme('spacing.2')}_center]`]: {},
    },

    '&-md': {
      '@apply h-9 pl-3 pr-12': {},
      [`@apply bg-[right_${theme('spacing.3')}_center]`]: {},
    },

    '&-lg': {
      '@apply h-10 pl-4 pr-14': {},
      [`@apply bg-[right_${theme('spacing.4')}_center]`]: {},
    },

    '&-pill': {
      '@apply rounded-full': {},
    },
  },
});
