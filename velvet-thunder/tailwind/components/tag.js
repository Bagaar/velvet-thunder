'use strict';

module.exports = () => ({
  '.velvet-tag': {
    '@apply border border-transparent font-medium': {},
    '@apply flex items-center justify-center': {},
    '@apply rounded text-sm w-fit': {},

    '&-sm': {
      '@apply h-5 px-1 text-xs': {},
    },

    '&-md': {
      '@apply h-6 px-2': {},
    },

    '&-lg': {
      '@apply h-7 px-3': {},
    },

    '&-pill': {
      '@apply rounded-full': {},
    },
  },
});
