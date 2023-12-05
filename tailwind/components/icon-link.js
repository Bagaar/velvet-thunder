"use strict";

module.exports = () => ({
  ".velvet-icon-link": {
    "@apply border border-transparent": {},
    "@apply flex items-center justify-center shrink-0": {},
    "@apply rounded-md transition": {},

    "&:focus-visible": {
      "@apply velvet-outline": {},
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
