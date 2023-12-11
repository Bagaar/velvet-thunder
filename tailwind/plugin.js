"use strict";

const tailwindPlugin = require("tailwindcss/plugin");

const COMPONENTS = {
  avatar: require("./components/avatar"),
  button: require("./components/button"),
  checkbox: require("./components/checkbox"),
  disclosure: require("./components/disclosure"),
  dropdown: require("./components/dropdown"),
  iconButton: require("./components/icon-button"),
  iconLink: require("./components/icon-link"),
  input: require("./components/input"),
  link: require("./components/link"),
  progress: require("./components/progress"),
  radio: require("./components/radio"),
  select: require("./components/select"),
  spinner: require("./components/spinner"),
  switch: require("./components/switch"),
  tag: require("./components/tag"),
  textarea: require("./components/textarea"),
  tooltip: require("./components/tooltip"),
};

const UTILITIES = {
  ...require("./utilities/outline"),
};

const DEFAULT_OPTIONS = {
  components: {},
};

module.exports = tailwindPlugin.withOptions(
  (providedOptions) => {
    const options = {
      ...DEFAULT_OPTIONS,
      ...providedOptions,
    };

    const components = Object.keys(COMPONENTS).filter((component) => {
      return options.components[component] !== false;
    });

    return ({ addComponents, addUtilities, config, theme }) => {
      addComponents(
        components.map((component) =>
          COMPONENTS[component]({
            config,
            options: options.components[component],
            theme,
          }),
        ),
      );

      addUtilities(UTILITIES);
    };
  },
  () => ({
    safelist: [
      {
        pattern: /^velvet-/,
      },
    ],
  }),
);
