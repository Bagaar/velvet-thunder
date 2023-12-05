"use strict";

module.exports = () => ({
  ".velvet-avatar": {
    "@apply flex font-medium items-center justify-center": {},
    "@apply overflow-hidden shrink-0 text-white uppercase": {},

    "&-image": {
      "@apply h-full object-cover w-full": {},
    },

    "&-sm": {
      "@apply h-7 rounded text-xs w-7": {},
    },

    "&-md": {
      "@apply h-9 rounded-md text-sm w-9": {},
    },

    "&-lg": {
      "@apply h-11 rounded-lg text-base w-11": {},
    },

    "&-round": {
      "@apply rounded-full": {},
    },
  },
});
