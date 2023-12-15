"use strict";

const rehypeAutolinkHeadings = require("rehype-autolink-headings");
const rehypeHighlight = require("rehype-highlight");
const rehypeWrapAll = require("rehype-wrap-all");
const componentSignatures = require("./rehype-plugins/component-signatures");

module.exports = {
  rehypePlugins: [
    componentSignatures,
    [
      rehypeAutolinkHeadings,
      {
        behavior: "wrap",
      },
    ],
    [
      rehypeWrapAll,
      [
        {
          selector: "pre",
          wrapper: "div.not-prose",
        },
      ],
    ],
    rehypeHighlight,
  ],
  repository: {
    editBranch: "main",
    url: "https://github.com/bagaar/velvet-thunder",
  },
};
