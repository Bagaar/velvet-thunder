'use strict';

const { reduceStyles } = require('../utils/styling');

module.exports = ({ options }) => ({
  '.velvet-button': {
    '@apply border border-transparent inline-flex items-center outline-none transition':
      {},

    '&:focus': reduceStyles(options.colors, (color) => ({
      [`&[data-color="${color}"]`]: {
        [`@apply ring ring-${color}-400/50`]: {},
      },
    })),

    '&:disabled': {
      '@apply cursor-not-allowed': {},
    },

    '&[data-size="sm"]': {
      '@apply h-6 px-3 rounded text-sm': {},
    },

    '&[data-size="md"]': {
      '@apply h-8 px-4 rounded-md text-base': {},
    },

    '&[data-size="lg"]': {
      '@apply h-10 px-5 rounded-lg text-lg': {},
    },

    '&[data-rounded]': {
      '@apply rounded-full': {},
    },

    '&[data-variant="solid"]': reduceStyles(options.colors, (color) => ({
      [`&[data-color="${color}"]`]: {
        [`@apply bg-${color}-400 text-white`]: {},

        '&:hover': {
          [`@apply bg-${color}-500`]: {},
        },

        '&:disabled': {
          [`@apply bg-${color}-300`]: {},
        },
      },
    })),

    '&[data-variant="outline"]': reduceStyles(options.colors, (color) => ({
      [`&[data-color="${color}"]`]: {
        [`@apply border-${color}-400 text-${color}-400`]: {},

        '&:hover': {
          [`@apply border-${color}-500 text-${color}-500`]: {},
        },

        '&:disabled': {
          [`@apply border-${color}-300 text-${color}-300`]: {},
        },
      },
    })),

    '&[data-variant="ghost"]': reduceStyles(options.colors, (color) => ({
      [`&[data-color="${color}"]`]: {
        [`@apply text-${color}-400`]: {},

        '&:hover': {
          [`@apply bg-${color}-400/25`]: {},
        },

        '&:disabled': {
          [`@apply bg-transparent text-${color}-300`]: {},
        },
      },
    })),
  },
});
