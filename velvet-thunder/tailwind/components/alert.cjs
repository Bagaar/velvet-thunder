'use strict';

const { generateVariants, velvetVar, velvetOnVar } = require('../variants.cjs');

module.exports = ({ theme, options }) => ({
  '.velvet-alert': {
    padding: theme('spacing.4'),
    'border-radius': theme('borderRadius.lg'),

    '&-header': {
      display: 'flex',
      'align-items': 'center',
      'margin-bottom': theme('spacing.2'),
      'column-gap': theme('spacing.2'),
    },

    '&-icon': {
      'flex-shrink': '0',
      width: theme('spacing.4'),
      height: theme('spacing.4'),
    },

    '&-title': {
      'font-weight': theme('fontWeight.medium'),
      width: '100%',
    },

    '&-content': {
      'padding-right': theme('spacing.11'),
      'font-size': theme('fontSize.sm'),
      'line-height': theme('lineHeight.5'),
    },

    ...generateVariants(options?.variants, (name) => ({
      'background-color': velvetVar(name),
      color: velvetOnVar(name),

      '& .velvet-icon-button-alert': {
        color: velvetVar(name),
        'background-color': velvetOnVar(name),

        '&:hover': {
          'background-color': velvetVar(name, 'icon-hover'),
        },

        '&:active': {
          'background-color': velvetVar(name, 'icon-active'),
        },
      },
    })),
  },
});
