'use strict';

module.exports = () => ({
  '.velvet-disclosure': {
    '@apply overflow-hidden': {},

    '&:focus-within': {
      '@apply overflow-visible': {},
    },
  },
});
