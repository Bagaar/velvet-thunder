'use strict';

module.exports = ({ theme }) => ({
  '.velvet-icon-link': {
    'border-width': '1px',
    'border-color': 'transparent',
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'center',
    'flex-shrink': '0',
    'border-radius': theme('borderRadius.md'),
    'transition-property': theme('transitionProperty.DEFAULT'),
    'transition-timing-function': theme('transitionTimingFunction.DEFAULT'),
    'transition-duration': theme('transitionDuration.DEFAULT'),

    '&:focus-visible': {
      'outline-style': 'solid',
      'outline-width': '2px',
      'outline-offset': '1px',
    },

    '&-xs': {
      width: theme('spacing.7'),
      height: theme('spacing.7'),
    },

    '&-sm': {
      width: theme('spacing.8'),
      height: theme('spacing.8'),
    },

    '&-md': {
      width: theme('spacing.9'),
      height: theme('spacing.9'),
    },

    '&-lg': {
      width: theme('spacing.10'),
      height: theme('spacing.10'),
    },

    '&-round': {
      'border-radius': theme('borderRadius.full'),
    },
  },
});
