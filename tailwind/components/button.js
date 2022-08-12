'use strict';

module.exports = () => ({
  '.velvet-button': {
    '@apply border border-transparent flex font-medium items-center': {},
    '@apply rounded-md text-sm transition': {},

    '&:focus-visible': {
      '@apply outline outline-2 outline-offset-1': {},
    },

    '&:disabled': {
      '@apply cursor-not-allowed': {},
    },

    '&-sm': {
      '@apply h-8 px-3': {},
    },

    '&-md': {
      '@apply h-9 px-4': {},
    },

    '&-lg': {
      '@apply h-10 px-6': {},
    },

    '&-pill': {
      '@apply rounded-full': {},
    },

    '&-disclosure-icon': {
      '@apply ml-2': {},
    },

    '.velvet-spinner': {
      '@apply mr-2': {},
    },
  },
});
