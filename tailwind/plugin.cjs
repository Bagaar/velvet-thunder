'use strict';

const tailwindPlugin = require('tailwindcss/plugin');

const COMPONENTS = {
  alert: require('./components/alert.cjs'),
  avatar: require('./components/avatar.cjs'),
  button: require('./components/button.cjs'),
  checkbox: require('./components/checkbox.cjs'),
  disclosure: require('./components/disclosure.cjs'),
  dropdown: require('./components/dropdown.cjs'),
  iconButton: require('./components/icon-button.cjs'),
  iconLink: require('./components/icon-link.cjs'),
  input: require('./components/input.cjs'),
  link: require('./components/link.cjs'),
  progress: require('./components/progress.cjs'),
  radio: require('./components/radio.cjs'),
  select: require('./components/select.cjs'),
  spinner: require('./components/spinner.cjs'),
  switch: require('./components/switch.cjs'),
  tag: require('./components/tag.cjs'),
  textarea: require('./components/textarea.cjs'),
  tooltip: require('./components/tooltip.cjs'),
};

const UTILITIES = {
  ...require('./utilities/outline.cjs'),
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
