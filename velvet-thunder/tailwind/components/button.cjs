'use strict';

module.exports = ({ theme }) => ({
  '.velvet-button': {
    'border-width': '1px',
    'border-color': 'transparent',
    'font-weight': theme('fontWeight.medium'),
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'center',
    'border-radius': theme('borderRadius.md'),
    'font-size': theme('fontSize.sm'),
    'line-height': theme('lineHeight.5'),
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
      height: theme('spacing.7'),
      'padding-left': theme('spacing.2'),
      'padding-right': theme('spacing.2'),
    },

    '&-sm': {
      height: theme('spacing.8'),
      'padding-left': theme('spacing.3'),
      'padding-right': theme('spacing.3'),
    },

    '&-md': {
      height: theme('spacing.9'),
      'padding-left': theme('spacing.4'),
      'padding-right': theme('spacing.4'),
    },

    '&-lg': {
      height: theme('spacing.10'),
      'padding-left': theme('spacing.6'),
      'padding-right': theme('spacing.6'),
    },

    '&-pill': {
      'border-radius': theme('borderRadius.full'),
    },

    '&-disclosure-icon': {
      'margin-left': theme('spacing.2'),
      width: theme('spacing.4'),
      height: theme('spacing.4'),
    },

    '.velvet-spinner': {
      'margin-right': theme('spacing.2'),
    },
  },
});
