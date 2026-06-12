'use strict';

module.exports = ({ theme }) => ({
  '.velvet-textarea': {
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
      height: theme('spacing.16'),
      'padding-left': theme('spacing.2'),
      'padding-right': theme('spacing.2'),
      'padding-top': theme('spacing.1'),
      'padding-bottom': theme('spacing.1'),
    },

    '&-md': {
      height: theme('spacing.24'),
      'padding-left': theme('spacing.3'),
      'padding-right': theme('spacing.3'),
      'padding-top': theme('spacing.2'),
      'padding-bottom': theme('spacing.2'),
    },

    '&-lg': {
      height: theme('spacing.32'),
      'padding-left': theme('spacing.4'),
      'padding-right': theme('spacing.4'),
      'padding-top': theme('spacing.3'),
      'padding-bottom': theme('spacing.3'),
    },
  },
});
