"use strict";

module.exports = () => ({
  ".velvet-alert": {
    "@apply border p-4 rounded-lg": {},

    "&-header": {
      "@apply flex items-center mb-2 space-x-2": {},
    },

    "&-icon": {
      "@apply h-4 shrink-0 w-4": {},
    },

    "&-title": {
      "@apply font-medium w-full": {},
    },

    "&-content": {
      "@apply text-sm": {},
    },
  },
});
