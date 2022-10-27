'use strict';

module.exports = () => ({
  '.velvet-progress': {
    '@apply overflow-hidden rounded-full w-full': {},

    '&-sm': {
      '@apply h-1': {},
    },

    '&-md': {
      '@apply h-2': {},
    },

    '&-lg': {
      '@apply h-3': {},
    },

    '&-line': {
      '@apply h-full rounded-full transition-all': {},
    },
  },
});
