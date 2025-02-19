'use strict';

module.exports = () => ({
  '.velvet-icon-link': {
    '@apply border border-transparent': {},
    '@apply flex items-center justify-center shrink-0': {},
    '@apply rounded-md transition': {},

    '&:focus-visible': {
      '@apply velvet-outline': {},
    },

    '&-xs': {
      '@apply size-7': {},
    },

    '&-sm': {
      '@apply size-8': {},
    },

    '&-md': {
      '@apply size-9': {},
    },

    '&-lg': {
      '@apply size-10': {},
    },

    '&-round': {
      '@apply rounded-full': {},
    },
  },
});
