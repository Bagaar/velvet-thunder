'use strict';

const tailwindColors = require('tailwindcss/colors');
const tailwindPlugin = require('tailwindcss/plugin');

const COMPONENTS = {
  button: require('./components/button'),
  spinner: require('./components/spinner'),
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
