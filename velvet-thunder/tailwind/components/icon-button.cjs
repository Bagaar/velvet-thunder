'use strict';

const { generateVariants, velvetVar, velvetOnVar } = require('../variants.cjs');

module.exports = ({ options, theme }) => ({
  '.velvet-icon-button': {
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

    '&:disabled': {
      cursor: 'not-allowed',
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

    '&-disclosure-icon': {
      width: theme('spacing.4'),
      height: theme('spacing.4'),
    },

    ...generateVariants(options?.variants, (name) => ({
      'background-color': velvetVar(name),
      color: velvetOnVar(name),
      'border-color': velvetVar(name, 'border'),

      '&:hover': {
        'background-color': velvetVar(name, 'hover'),
      },

      '&:active': {
        'background-color': velvetVar(name, 'active'),
      },

      '&:disabled': {
        'background-color': velvetVar(name, 'disabled'),
      },
    })),
  },
});
