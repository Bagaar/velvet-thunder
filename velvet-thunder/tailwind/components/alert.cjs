'use strict';

module.exports = () => ({
  '.velvet-alert': {
    '@apply p-4 rounded-lg': {},

    '&-header': {
      '@apply flex items-center mb-2 space-x-2': {},
    },

    '&-icon': {
      '@apply shrink-0 size-4': {},
    },

    '&-title': {
      '@apply font-medium w-full': {},
    },

    '&-content': {
      '@apply pr-11 text-sm': {},
    },
  },
});
