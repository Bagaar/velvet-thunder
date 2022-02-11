const { join } = require('path');

const CONTENT_PATHS = ['/addon/components/**/*.{hbs,js}'];

module.exports = (providedPathToVelvetThunder) => {
  const pathToVelvetThunder =
    providedPathToVelvetThunder || './node_modules/velvet-thunder';

  return CONTENT_PATHS.map((path) => join(pathToVelvetThunder, path));
};
