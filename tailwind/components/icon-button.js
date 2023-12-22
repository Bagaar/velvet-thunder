"use strict";

module.exports = () => ({
  ".velvet-icon-button": {
    "@apply border border-transparent": {},
    "@apply flex items-center justify-center shrink-0": {},
    "@apply rounded-md transition": {},

    "&:focus-visible": {
      "@apply velvet-outline": {},
    },

    "&:disabled": {
      "@apply cursor-not-allowed": {},
    },

    "&-xs": {
      "@apply size-7": {},
    },

    "&-sm": {
      "@apply size-8": {},
    },

    "&-md": {
      "@apply size-9": {},
    },

    "&-lg": {
      "@apply size-10": {},
    },

    "&-round": {
      "@apply rounded-full": {},
    },

    "&-disclosure-icon": {
      "@apply size-4": {},
    },
  },
});
