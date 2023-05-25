'use strict';

module.exports = () => ({
  '.velvet-switch': {
    '@apply flex items-center w-fit': {},

    '&-right': {
      '@apply flex-row-reverse': {},
    },

    '&-sm': {
      '@apply gap-2 text-xs': {},

      '.velvet-switch-track': {
        '@apply h-4 w-7': {},
      },

      '.velvet-switch-handle': {
        '@apply h-3 w-3': {},
      },
    },

    '&-md': {
      '@apply gap-3 text-sm': {},

      '.velvet-switch-track': {
        '@apply h-5 w-9': {},
      },

      '.velvet-switch-handle': {
        '@apply h-4 w-4': {},
      },
    },

    '&-lg': {
      '@apply gap-4 text-base': {},

      '.velvet-switch-track': {
        '@apply h-6 w-11': {},
      },

      '.velvet-switch-handle': {
        '@apply h-5 w-5': {},
      },
    },

    '&-disabled': {
      '@apply cursor-not-allowed': {},
    },

    '&-input': {
      '@apply sr-only': {},

      '&:focus-visible + .velvet-switch-track': {
        '@apply outline outline-2 outline-offset-1': {},
      },

      '&:checked + .velvet-switch-track .velvet-switch-handle': {
        '@apply translate-x-full': {},
      },
    },

    '.velvet-switch-track': {
      '@apply p-0.5 rounded-full transition-colors': {},
    },

    '.velvet-switch-handle': {
      '@apply rounded-full transition-transform': {},
    },
  },
});
