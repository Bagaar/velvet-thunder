'use strict';

module.exports = () => ({
  '.velvet-textarea': {
    '@apply rounded-md text-sm transition w-full': {},

    '&:focus': {
      '@apply ring-0 velvet-outline-offset-0': {},
    },

    '&:disabled': {
      '@apply cursor-not-allowed': {},
    },

    '&-sm': {
      '@apply h-16 px-2 py-1': {},
    },

    '&-md': {
      '@apply h-24 px-3 py-2': {},
    },

    '&-lg': {
      '@apply h-32 px-4 py-3': {},
    },
  },
});
