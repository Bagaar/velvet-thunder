'use strict';

const tailwindPlugin = require('tailwindcss/plugin');

const COMPONENTS = {
  avatar: require('./components/avatar'),
  button: require('./components/button'),
  checkbox: require('./components/checkbox'),
  dropdown: require('./components/dropdown'),
  iconButton: require('./components/icon-button'),
  input: require('./components/input'),
  progress: require('./components/progress'),
  radio: require('./components/radio'),
  select: require('./components/select'),
  spinner: require('./components/spinner'),
  tag: require('./components/tag'),
  textarea: require('./components/textarea'),
  tooltip: require('./components/tooltip'),
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

    return ({ addComponents, config, theme }) => {
      addComponents(
        components.map((component) =>
          COMPONENTS[component]({
            config,
            options: options.components[component],
            theme,
          })
        )
      );
    };
  },
  () => ({
    safelist: [
      {
        pattern: /^velvet-/,
      },
    ],
  })
);
