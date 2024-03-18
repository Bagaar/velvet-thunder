'use strict';

const { join } = require('node:path');

const CONTENT_PATHS = ['dist/components/**/*.js'];
const ROOT_PATH = join(__dirname, '..');

module.exports = () => CONTENT_PATHS.map((path) => join(ROOT_PATH, path));
