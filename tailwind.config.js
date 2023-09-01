"use strict";

const tailwindFormsPlugin = require("@tailwindcss/forms");
const tailwindTypographyPlugin = require("@tailwindcss/typography");
const velvetThunder = require("./tailwind");

module.exports = {
  content: [
    ...velvetThunder.content(),
    "./docs/**/*.md",
    "./tests/dummy/app/components/**/*.{hbs,js}",
    "./tests/dummy/app/templates/**/*.hbs",
    "./tests/dummy/app/index.html",
    "./tests/integration/**/*-test.ts",
  ],
  darkMode: "class",
  plugins: [
    tailwindFormsPlugin({
      strategy: "class",
    }),
    tailwindTypographyPlugin,
    velvetThunder.plugin(),
  ],
  theme: {
    extend: {},
  },
};
