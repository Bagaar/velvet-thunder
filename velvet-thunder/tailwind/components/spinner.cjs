'use strict';

module.exports = ({ theme }) => ({
  '@keyframes velvet-spin': {
    to: { transform: 'rotate(360deg)' },
  },

  '.velvet-spinner': {
    animation: 'velvet-spin 1s linear infinite',
    'flex-shrink': '0',

    '&-xs': {
      width: theme('spacing.3'),
      height: theme('spacing.3'),
    },

    '&-sm': {
      width: theme('spacing.4'),
      height: theme('spacing.4'),
    },

    '&-md': {
      width: theme('spacing.5'),
      height: theme('spacing.5'),
    },

    '&-lg': {
      width: theme('spacing.6'),
      height: theme('spacing.6'),
    },

    '&-xl': {
      width: theme('spacing.7'),
      height: theme('spacing.7'),
    },

    '&-track': {
      opacity: '0.2',
    },
  },
});
