'use strict';

const rehypePrism = require('@mapbox/rehype-prism');
const rehypeAutolinkHeadings = require('rehype-autolink-headings');

module.exports = {
  rehypePlugins: [
    [
      rehypeAutolinkHeadings,
      {
        behavior: 'wrap',
      },
    ],
    rehypePrism,
  ],
  remarkHbsOptions: {
    escapeCurliesCode: false,
  },
  repository: {
    editBranch: 'main',
    url: 'https://github.com/Bagaar/velvet-thunder',
  },
};
