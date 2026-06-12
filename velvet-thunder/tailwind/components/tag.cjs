'use strict';

module.exports = ({ theme }) => ({
  '.velvet-tag': {
    'border-width': '1px',
    'border-color': 'transparent',
    'font-weight': theme('fontWeight.medium'),
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'center',
    'border-radius': theme('borderRadius.DEFAULT'),
    'font-size': theme('fontSize.sm'),
    'line-height': theme('lineHeight.5'),
    width: 'fit-content',

    '&-sm': {
      height: theme('spacing.5'),
      'padding-left': theme('spacing.1'),
      'padding-right': theme('spacing.1'),
      'font-size': theme('fontSize.xs'),
      'line-height': theme('lineHeight.4'),
    },

    '&-md': {
      height: theme('spacing.6'),
      'padding-left': theme('spacing.2'),
      'padding-right': theme('spacing.2'),
    },

    '&-lg': {
      height: theme('spacing.7'),
      'padding-left': theme('spacing.3'),
      'padding-right': theme('spacing.3'),
    },

    '&-pill': {
      'border-radius': theme('borderRadius.full'),
    },
  },
});
