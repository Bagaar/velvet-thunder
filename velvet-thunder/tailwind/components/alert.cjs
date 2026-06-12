'use strict';

module.exports = ({ theme }) => ({
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
  },
});
