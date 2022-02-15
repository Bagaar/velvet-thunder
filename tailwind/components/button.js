'use strict';

const { reduceStyles } = require('../utils/styling');

module.exports = ({ colors }) => ({
  '.velvet-button': {
    '@apply border-2 border-transparent font-medium': {},
    '@apply inline-flex items-center': {},
    '@apply outline-none transition': {},

    '&:focus': reduceStyles(colors, (color) => ({
      [`&.velvet-button-${color}`]: {
        [`@apply ring ring-${color}-400/50`]: {},
      },
    })),

    '&-disabled': {
      '@apply cursor-not-allowed': {},
    },

    '&-sm': {
      '@apply h-6 px-3 rounded text-sm': {},

      '.velvet-spinner': {
        '@apply mr-1': {},
      },
    },

    '&-md': {
      '@apply h-8 px-4 rounded-md text-base': {},

      '.velvet-spinner': {
        '@apply mr-2': {},
      },
    },

    '&-lg': {
      '@apply h-10 px-5 rounded-lg text-lg': {},

      '.velvet-spinner': {
        '@apply mr-3': {},
      },
    },

    '&-rounded': {
      '@apply rounded-full': {},
    },

    '&-solid': reduceStyles(colors, (color) => ({
      [`&.velvet-button-${color}`]: {
        [`@apply bg-${color}-400 text-white`]: {},

        '&:hover': {
          [`@apply bg-${color}-500`]: {},
        },

        '&.velvet-button-disabled': {
          [`@apply bg-${color}-300`]: {},
        },
      },
    })),

    '&-outline': reduceStyles(colors, (color) => ({
      [`&.velvet-button-${color}`]: {
        [`@apply border-${color}-400 text-${color}-400`]: {},

        '&:hover': {
          [`@apply border-${color}-500 text-${color}-500`]: {},
        },

        '&.velvet-button-disabled': {
          [`@apply border-${color}-300 text-${color}-300`]: {},
        },
      },
    })),

    '&-ghost': reduceStyles(colors, (color) => ({
      [`&.velvet-button-${color}`]: {
        [`@apply text-${color}-400`]: {},

        '&:hover': {
          [`@apply bg-${color}-400/25`]: {},
        },

        '&.velvet-button-disabled': {
          [`@apply bg-transparent text-${color}-300`]: {},
        },
      },
    })),
  },
});
