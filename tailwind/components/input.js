'use strict';

module.exports = () => ({
  '.velvet-input': {
    '@apply py-0 rounded-md text-sm transition w-full': {},

    '&:focus': {
      '@apply outline outline-2 outline-offset-0 ring-0': {},
    },

    '&:disabled': {
      '@apply cursor-not-allowed': {},
    },

    '&-sm': {
      '@apply h-8 px-2': {},
    },

    '&-md': {
      '@apply h-9 px-3': {},
    },

    '&-lg': {
      '@apply h-10 px-4': {},
    },

    '&-pill': {
      '@apply rounded-full': {},
    },
  },
});
