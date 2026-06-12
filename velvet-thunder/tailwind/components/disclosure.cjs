'use strict';

module.exports = () => ({
  '.velvet-disclosure': {
    overflow: 'hidden',

    '&:focus-within': {
      overflow: 'visible',
    },
  },
});
