/**
 * Reduce an array to a styles object.
 *
 * @param {Array} options
 * @param {Function} stylesCallback
 * @returns {Object} Styles object.
 */
function reduceStyles(options, stylesCallback) {
  return options.reduce(
    (styles, option) => ({
      ...styles,
      ...stylesCallback(option),
    }),
    {}
  );
}

module.exports = {
  reduceStyles,
};
