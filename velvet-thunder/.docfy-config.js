'use strict';

const rehypeAutolinkHeadings = require('rehype-autolink-headings');
const rehypeHighlight = require('rehype-highlight');
const rehypeWrapAll = require('rehype-wrap-all');

module.exports = {
  rehypePlugins: [
    [
      rehypeAutolinkHeadings,
      {
        behavior: 'wrap',
      },
    ],
    [
      rehypeWrapAll,
      [
        {
          selector: 'pre',
          wrapper: 'div.not-prose',
        },
      ],
    ],
    rehypeHighlight,
  ],
  repository: {
    editBranch: 'main',
    url: 'https://github.com/Bagaar/velvet-thunder',
  },
};
