'use strict';

module.exports = () => ({
  '.velvet-button': {
    '@apply border border-transparent font-medium': {},
    '@apply flex items-center justify-center': {},
    '@apply rounded-md text-sm transition': {},

    '&:focus-visible': {
      '@apply velvet-outline': {},
    },

    '&:disabled': {
      '@apply cursor-not-allowed': {},
    },

    '&-xs': {
      '@apply h-7 px-2': {},
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
      '@apply ml-2 size-4': {},
    },

    '.velvet-spinner': {
      '@apply mr-2': {},
    },
  },
});
