'use strict';

module.exports = ({ theme }) => ({
  '.velvet-checkbox': {
    display: 'flex',
    'align-items': 'center',
    width: 'fit-content',

    '&-sm': {
      'font-size': theme('fontSize.xs'),
      'line-height': theme('lineHeight.4'),

      '.velvet-checkbox-input': {
        'margin-right': theme('spacing.2'),
        width: theme('spacing.4'),
        height: theme('spacing.4'),
      },
    },

    '&-md': {
      'font-size': theme('fontSize.sm'),
      'line-height': theme('lineHeight.5'),

      '.velvet-checkbox-input': {
        'margin-right': theme('spacing.3'),
        width: theme('spacing.5'),
        height: theme('spacing.5'),
      },
    },

    '&-lg': {
      'font-size': theme('fontSize.base'),
      'line-height': theme('lineHeight.6'),

      '.velvet-checkbox-input': {
        'margin-right': theme('spacing.4'),
        width: theme('spacing.6'),
        height: theme('spacing.6'),
      },
    },

    '&-disabled': {
      cursor: 'not-allowed',
    },

    '&-input': {
      'border-width': '2px',
      'border-radius': theme('borderRadius.DEFAULT'),
      'transition-property': theme('transitionProperty.DEFAULT'),
      'transition-timing-function': theme('transitionTimingFunction.DEFAULT'),
      'transition-duration': theme('transitionDuration.DEFAULT'),

      '&:focus': {
        'box-shadow': 'none',
        'outline-style': 'solid',
        'outline-width': '2px',
        'outline-offset': '1px',
      },

      '&:disabled': {
        cursor: 'not-allowed',
      },
    },
  },
});
