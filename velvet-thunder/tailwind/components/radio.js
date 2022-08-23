'use strict';

module.exports = () => ({
  '.velvet-radio': {
    '@apply flex items-center w-fit': {},

    '&-sm': {
      '@apply text-xs': {},

      '.velvet-radio-input': {
        '@apply h-4 mr-2 w-4': {},
      },
    },

    '&-md': {
      '@apply text-sm': {},

      '.velvet-radio-input': {
        '@apply h-5 mr-3 w-5': {},
      },
    },

    '&-lg': {
      '@apply text-base': {},

      '.velvet-radio-input': {
        '@apply h-6 mr-4 w-6': {},
      },
    },

    '&-disabled': {
      '@apply cursor-not-allowed': {},
    },

    '&-input': {
      '@apply border-2 transition': {},

      '&:focus': {
        '@apply outline outline-2 outline-offset-1 ring-0 ring-offset-0': {},
      },

      '&:disabled': {
        '@apply cursor-not-allowed': {},
      },
    },
  },
});
