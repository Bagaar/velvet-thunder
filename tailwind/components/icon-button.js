"use strict";

module.exports = () => ({
  ".velvet-icon-button": {
    "@apply border border-transparent": {},
    "@apply flex items-center justify-center": {},
    "@apply rounded-md transition": {},

    "&:focus-visible": {
      "@apply velvet-outline": {},
    },

    "&:disabled": {
      "@apply cursor-not-allowed": {},
    },

    "&-xs": {
      "@apply h-7 w-7": {},
    },

    "&-sm": {
      "@apply h-8 w-8": {},
    },

    "&-md": {
      "@apply h-9 w-9": {},
    },

    "&-lg": {
      "@apply h-10 w-10": {},
    },

    "&-round": {
      "@apply rounded-full": {},
    },
  },
});
