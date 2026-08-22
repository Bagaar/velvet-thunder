'use strict';

const { generateVariants, velvetVar } = require('../variants.cjs');

module.exports = ({ theme, options }) => ({
  '.velvet-progress': {
    overflow: 'hidden',
    'border-radius': theme('borderRadius.full'),
    width: '100%',

    '&-sm': {
      height: theme('spacing.1'),
    },

    '&-md': {
      height: theme('spacing.2'),
    },

    '&-lg': {
      height: theme('spacing.3'),
    },

    '&-line': {
      height: '100%',
      'border-radius': theme('borderRadius.full'),
      'transition-property': theme('transitionProperty.all'),
      'transition-timing-function': theme('transitionTimingFunction.DEFAULT'),
      'transition-duration': theme('transitionDuration.DEFAULT'),
    },

    ...generateVariants(options?.variants, (name) => ({
      'background-color': velvetVar(name, 'track'),

      '.velvet-progress-line': {
        'background-color': velvetVar(name),
      },
    })),
  },
});
