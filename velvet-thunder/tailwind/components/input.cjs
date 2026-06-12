'use strict';

module.exports = ({ theme }) => ({
  '.velvet-input': {
    'padding-top': '0',
    'padding-bottom': '0',
    'border-radius': theme('borderRadius.md'),
    'font-size': theme('fontSize.sm'),
    'line-height': theme('lineHeight.5'),
    'transition-property': theme('transitionProperty.DEFAULT'),
    'transition-timing-function': theme('transitionTimingFunction.DEFAULT'),
    'transition-duration': theme('transitionDuration.DEFAULT'),
    width: '100%',

    '&:focus': {
      'box-shadow': 'none',
      'outline-style': 'solid',
      'outline-width': '2px',
      'outline-offset': '0px',
    },

    '&:disabled': {
      cursor: 'not-allowed',
    },

    '&-sm': {
      height: theme('spacing.8'),
      'padding-left': theme('spacing.2'),
      'padding-right': theme('spacing.2'),
    },

    '&-md': {
      height: theme('spacing.9'),
      'padding-left': theme('spacing.3'),
      'padding-right': theme('spacing.3'),
    },

    '&-lg': {
      height: theme('spacing.10'),
      'padding-left': theme('spacing.4'),
      'padding-right': theme('spacing.4'),
    },

    '&-pill': {
      'border-radius': theme('borderRadius.full'),
    },
  },
});
