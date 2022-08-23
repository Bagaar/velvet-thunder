'use strict';

const { join } = require('path');

const CONTENT_PATHS = ['addon/components/**/*.hbs'];
const ROOT_PATH = join(__dirname, '..');

module.exports = () => CONTENT_PATHS.map((path) => join(ROOT_PATH, path));
