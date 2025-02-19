'use strict';

module.exports = () => ({
  '.velvet-avatar': {
    '@apply flex font-medium items-center justify-center': {},
    '@apply overflow-hidden shrink-0 text-white uppercase': {},

    '&-image': {
      '@apply object-cover size-full': {},
    },

    '&-sm': {
      '@apply rounded size-7 text-xs': {},
    },

    '&-md': {
      '@apply rounded-md size-9 text-sm': {},
    },

    '&-lg': {
      '@apply rounded-lg size-11 text-base': {},
    },

    '&-round': {
      '@apply rounded-full': {},
    },

    '&-icon': {
      '@apply size-4': {},
    },
  },
});
