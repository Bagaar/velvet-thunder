'use strict';

module.exports = ({ theme }) => ({
  '.velvet-switch': {
    display: 'flex',
    'align-items': 'center',
    width: 'fit-content',

    '&-right': {
      'flex-direction': 'row-reverse',
    },

    '&-sm': {
      gap: theme('spacing.2'),
      'font-size': theme('fontSize.xs'),
      'line-height': theme('lineHeight.4'),

      '.velvet-switch-track': {
        height: theme('spacing.4'),
        width: theme('spacing.7'),
      },

      '.velvet-switch-handle': {
        width: theme('spacing.3'),
        height: theme('spacing.3'),
      },
    },

    '&-md': {
      gap: theme('spacing.3'),
      'font-size': theme('fontSize.sm'),
      'line-height': theme('lineHeight.5'),

      '.velvet-switch-track': {
        height: theme('spacing.5'),
        width: theme('spacing.9'),
      },

      '.velvet-switch-handle': {
        width: theme('spacing.4'),
        height: theme('spacing.4'),
      },
    },

    '&-lg': {
      gap: theme('spacing.4'),
      'font-size': theme('fontSize.base'),
      'line-height': theme('lineHeight.6'),

      '.velvet-switch-track': {
        height: theme('spacing.6'),
        width: theme('spacing.11'),
      },

      '.velvet-switch-handle': {
        width: theme('spacing.5'),
        height: theme('spacing.5'),
      },
    },

    '&-disabled': {
      cursor: 'not-allowed',
    },

    '&-input': {
      position: 'absolute',
      width: '1px',
      height: '1px',
      padding: '0',
      margin: '-1px',
      overflow: 'hidden',
      clip: 'rect(0, 0, 0, 0)',
      'white-space': 'nowrap',
      'border-width': '0',

      '&:focus-visible + .velvet-switch-track': {
        'outline-style': 'solid',
        'outline-width': '2px',
        'outline-offset': '1px',
      },

      '&:checked + .velvet-switch-track .velvet-switch-handle': {
        transform: 'translateX(100%)',
      },
    },

    '.velvet-switch-track': {
      padding: '0.125rem',
      'border-radius': theme('borderRadius.full'),
      'transition-property': theme('transitionProperty.colors'),
      'transition-timing-function': theme('transitionTimingFunction.DEFAULT'),
      'transition-duration': theme('transitionDuration.DEFAULT'),
    },

    '.velvet-switch-handle': {
      'border-radius': theme('borderRadius.full'),
      'transition-property': theme('transitionProperty.transform'),
      'transition-timing-function': theme('transitionTimingFunction.DEFAULT'),
      'transition-duration': theme('transitionDuration.DEFAULT'),
    },
  },
});
