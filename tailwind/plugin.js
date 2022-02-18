'use strict';

const tailwindColors = require('tailwindcss/colors');
const tailwindPlugin = require('tailwindcss/plugin');

const COMPONENTS = {
  avatar: require('./components/avatar'),
  button: require('./components/button'),
  checkbox: require('./components/checkbox'),
  input: require('./components/input'),
  radio: require('./components/radio'),
  select: require('./components/select'),
  spinner: require('./components/spinner'),
  textarea: require('./components/textarea'),
};

const DEFAULT_OPTIONS = {
  colors: ['primary'],
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
            colors: options.colors,
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
    theme: {
      extend: {
        colors: {
          primary: tailwindColors.cyan,
        },
      },
    },
  })
);
