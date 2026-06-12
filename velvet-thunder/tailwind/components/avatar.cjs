'use strict';

module.exports = ({ theme }) => ({
  '.velvet-avatar': {
    display: 'flex',
    'font-weight': theme('fontWeight.medium'),
    'align-items': 'center',
    'justify-content': 'center',
    overflow: 'hidden',
    'flex-shrink': '0',
    color: theme('colors.white'),
    'text-transform': 'uppercase',

    '&-image': {
      'object-fit': 'cover',
      width: '100%',
      height: '100%',
    },

    '&-sm': {
      'border-radius': theme('borderRadius.DEFAULT'),
      width: theme('spacing.7'),
      height: theme('spacing.7'),
      'font-size': theme('fontSize.xs'),
      'line-height': theme('lineHeight.4'),
    },

    '&-md': {
      'border-radius': theme('borderRadius.md'),
      width: theme('spacing.9'),
      height: theme('spacing.9'),
      'font-size': theme('fontSize.sm'),
      'line-height': theme('lineHeight.5'),
    },

    '&-lg': {
      'border-radius': theme('borderRadius.lg'),
      width: theme('spacing.11'),
      height: theme('spacing.11'),
      'font-size': theme('fontSize.base'),
      'line-height': theme('lineHeight.6'),
    },

    '&-round': {
      'border-radius': theme('borderRadius.full'),
    },

    '&-icon': {
      width: theme('spacing.4'),
      height: theme('spacing.4'),
    },
  },
});
