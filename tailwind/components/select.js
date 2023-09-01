"use strict";

module.exports = ({ theme }) => ({
  ".velvet-select": {
    "@apply py-0 rounded-md text-sm transition w-full": {},

    "&:focus": {
      "@apply ring-0 velvet-outline-offset-0": {},
    },

    "&:disabled": {
      "@apply cursor-not-allowed opacity-100": {},
    },

    "&-sm": {
      "@apply h-8 pl-2 pr-8": {},
      [`@apply bg-[right_${theme("spacing.1")}_center]`]: {},
    },

    "&-md": {
      "@apply h-9 pl-3 pr-10": {},
      [`@apply bg-[right_${theme("spacing.2")}_center]`]: {},
    },

    "&-lg": {
      "@apply h-10 pl-4 pr-12": {},
      [`@apply bg-[right_${theme("spacing.3")}_center]`]: {},
    },

    "&-pill": {
      "@apply rounded-full": {},
    },
  },
});
