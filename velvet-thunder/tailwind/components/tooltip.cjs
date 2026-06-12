'use strict';

module.exports = ({ theme }) => ({
  '.velvet-tooltip': {
    '&-content': {
      'font-size': theme('fontSize.sm'),
      'line-height': theme('lineHeight.5'),
    },
  },
});
