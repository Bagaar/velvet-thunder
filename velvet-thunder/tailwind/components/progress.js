'use strict';

const { reduceStyles } = require('../utils/styling');

module.exports = ({ colors }) => ({
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

    ...reduceStyles(colors, (color) => ({
      [`&-${color}`]: {
        [`@apply bg-${color}-400/20`]: {},

        '.velvet-progress-line': {
          [`@apply bg-${color}-400`]: {},
        },
      },
    })),
  },
});
