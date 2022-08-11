'use strict';

module.exports = () => ({
  '.velvet-checkbox': {
    '@apply flex items-center w-fit': {},

    '&-sm': {
      '@apply text-xs': {},

      '.velvet-checkbox-input': {
        '@apply h-4 mr-2 w-4': {},
      },
    },

    '&-md': {
      '@apply text-sm': {},

      '.velvet-checkbox-input': {
        '@apply h-5 mr-3 w-5': {},
      },
    },

    '&-lg': {
      '@apply text-base': {},

      '.velvet-checkbox-input': {
        '@apply h-6 mr-4 w-6': {},
      },
    },

    '&-disabled': {
      '@apply cursor-not-allowed': {},
    },

    '&-input': {
      '@apply border-2 rounded transition': {},

      '&:focus': {
        '@apply outline outline-2 outline-offset-1 ring-0 ring-offset-0': {},
      },

      '&:disabled': {
        '@apply cursor-not-allowed': {},
      },
    },
  },
});
