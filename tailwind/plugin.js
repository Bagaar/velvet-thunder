const tailwindColors = require('tailwindcss/colors');
const tailwindPlugin = require('tailwindcss/plugin');

const COMPONENTS = [require('./components/button')];

const DEFAULT_COLOR = 'velvet-thunder';
const DEFAULT_OPTIONS = {
  colors: [DEFAULT_COLOR],
};

module.exports = tailwindPlugin.withOptions(
  (providedOptions) => {
    const options = {
      ...DEFAULT_OPTIONS,
      ...providedOptions,
    };

    return ({ addComponents, config, theme }) => {
      addComponents(
        COMPONENTS.map((component) =>
          component({
            config,
            options,
            theme,
          })
        )
      );
    };
  },
  () => ({
    theme: {
      extend: {
        colors: {
          [DEFAULT_COLOR]: tailwindColors.indigo,
        },
      },
    },
  })
);
