'use strict';

const { whenColorsEnabled, velvetVar } = require('../variants.cjs');

module.exports = ({ theme, options }) => ({
  '.velvet-tooltip': {
    '&-content': {
      padding: `${theme('spacing.1')} ${theme('spacing.2')}`,
      'border-radius': theme('borderRadius.DEFAULT'),
      'border-width': '1px',
      'font-size': theme('fontSize.sm'),
      'line-height': theme('lineHeight.5'),

      ...whenColorsEnabled(options?.colors, {
        'background-color': '#ffffff',
        'border-color': velvetVar('neutral'),
      }),
    },
  },
});
