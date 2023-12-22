"use strict";

module.exports = () => ({
  ".velvet-radio": {
    "@apply flex items-center w-fit": {},

    "&-sm": {
      "@apply text-xs": {},

      ".velvet-radio-input": {
        "@apply mr-2 size-4": {},
      },
    },

    "&-md": {
      "@apply text-sm": {},

      ".velvet-radio-input": {
        "@apply mr-3 size-5": {},
      },
    },

    "&-lg": {
      "@apply text-base": {},

      ".velvet-radio-input": {
        "@apply mr-4 size-6": {},
      },
    },

    "&-disabled": {
      "@apply cursor-not-allowed": {},
    },

    "&-input": {
      "@apply border-2 transition": {},

      "&:focus": {
        "@apply ring-0 ring-offset-0 velvet-outline": {},
      },

      "&:disabled": {
        "@apply cursor-not-allowed": {},
      },
    },
  },
});
