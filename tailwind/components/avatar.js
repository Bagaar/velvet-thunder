'use strict';

module.exports = () => ({
  '.velvet-avatar': {
    '@apply flex font-medium items-center justify-center': {},
    '@apply overflow-hidden text-white uppercase': {},

    '&-image': {
      '@apply h-full object-cover w-full': {},
    },

    '&-sm': {
      '@apply h-6 rounded text-xs w-6': {},
    },

    '&-md': {
      '@apply h-8 rounded-md text-sm w-8': {},
    },

    '&-lg': {
      '@apply h-10 rounded-lg text-base w-10': {},
    },

    '&-round': {
      '@apply rounded-full': {},
    },
  },
});
