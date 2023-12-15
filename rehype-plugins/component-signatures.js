"use strict";

const { default: babelGenerator } = require("@babel/generator");
const { parse: babelParse } = require("@babel/parser");
const { default: babelTraverse } = require("@babel/traverse");
const { paramCase } = require("change-case");
const { existsSync, readFileSync } = require("fs");

const MARKER_REG_EXP = new RegExp("<!-- component-signature: (.*) -->");
const COLUMN = {
  DEFAULT_VALUE: () => ({
    title: "Default Value",
    value: (entry) => {
      return [entry.defaultValue ? code(entry.defaultValue) : todo()];
    },
  }),
  DESCRIPTION: () => ({
    title: "Description",
    value: (entry) => {
      const descriptionElements = entry.descriptionLines.reduce(
        (elements, line, index) => {
          elements.push(text(line));

          if (index < entry.descriptionLines.length - 1) {
            elements.push(element("br"));
          }

          return elements;
        },
        [],
      );

      return descriptionElements.length ? descriptionElements : [todo()];
    },
  }),
  NAME: (symbol) => ({
    title: "Name",
    value: (entry) => {
      return [code(symbol + entry.name), text(entry.required ? " *" : "")];
    },
  }),
  TYPE: () => ({
    title: "Type",
    value: (entry) => {
      return [code(entry.type)];
    },
  }),
};

function velvetThunderComponentSignatures() {
  return ({ children }) => {
    const markers = children.filter((child) => {
      return child.type === "raw" && MARKER_REG_EXP.test(child.value);
    });

    markers.forEach((marker) => {
      const componentName = MARKER_REG_EXP.exec(marker.value)[1];
      const componentPath = `./addon/components/${componentName}.ts`;

      if (existsSync(componentPath) === false) {
        throw new Error(`\`${componentName}\` is not a valid component name.`);
      }

      const componentFile = readFileSync(componentPath, { encoding: "utf-8" });
      const componentAST = babelParse(componentFile, {
        plugins: ["decorators", "typescript"],
        sourceType: "module",
      });

      let componentArgs;
      let componentBlocks;
      let componentElement;

      babelTraverse(componentAST, {
        TSPropertySignature({ node }) {
          if (node.key.name === "Args") {
            componentArgs = extractApiData(
              node.typeAnnotation.typeAnnotation.members.filter(
                (node) => node.key.name.startsWith("private") === false,
              ),
            );
          } else if (node.key.name === "Blocks") {
            componentBlocks = extractApiData(
              node.typeAnnotation.typeAnnotation.members,
            );
          } else if (node.key.name === "Element") {
            componentElement = {
              name: babelGenerator(node.typeAnnotation.typeAnnotation).code,
            };
          }
        },
      });

      let componentArgsContent;
      let componentBlocksContent;
      let componentElementContent;

      if (componentArgs) {
        componentArgsContent = [
          createApiTable(componentArgs, [
            COLUMN.NAME("@"),
            COLUMN.DESCRIPTION(),
            COLUMN.TYPE(),
            COLUMN.DEFAULT_VALUE(),
          ]),
          note("Arguments marked with * are required."),
        ];
      } else {
        componentArgsContent = [
          placeholder("This component does not accept any arguments."),
        ];
      }

      if (componentBlocks) {
        componentBlocksContent = [
          createApiTable(componentBlocks, [
            COLUMN.NAME(":"),
            COLUMN.DESCRIPTION(),
            COLUMN.TYPE(),
          ]),
          note("Blocks marked with * are required."),
        ];
      } else {
        componentBlocksContent = [
          placeholder("This component does not accept any blocks."),
        ];
      }

      if (componentElement) {
        componentElementContent = [
          element("a", [code(componentElement.name)], {
            href: `https://developer.mozilla.org/en-US/docs/Web/API/${componentElement.name}`,
            rel: "noopener noreferrer",
            target: "_blank",
          }),
        ];
      } else {
        componentElementContent = [
          placeholder("This component does not accept `...attributes`."),
        ];
      }

      children.splice(
        children.indexOf(marker),
        1,
        h3("Element"),
        ...componentElementContent,
        h3("Blocks"),
        ...componentBlocksContent,
        h3("Arguments"),
        ...componentArgsContent,
      );
    });
  };
}

function extractApiData(members) {
  return members.map((node) => {
    const leadingComments = node.leadingComments || [];
    const descriptionLines = leadingComments
      .filter(isDescriptionComment)
      .map((comment) => comment.value.replace("/ ", "").trim());
    const defaultValueComment = leadingComments.find(isDefaultValueComment);

    return {
      defaultValue: defaultValueComment
        ? defaultValueComment.value.substring(
            defaultValueComment.value.indexOf("[") + 1,
            defaultValueComment.value.indexOf("]"),
          )
        : undefined,
      descriptionLines,
      name: node.key.name,
      required: node.optional === undefined,
      type: babelGenerator(node.typeAnnotation.typeAnnotation).code,
    };
  });
}

function createApiTable(data, columns) {
  return element("table", [
    element("thead", [
      element(
        "tr",
        columns.map((column) => element("th", [text(column.title)])),
      ),
    ]),
    element(
      "tbody",
      data.map((entry) =>
        element(
          "tr",
          columns.map((column) => element("td", column.value(entry))),
        ),
      ),
    ),
  ]);
}

function code(value) {
  return element("code", [text(value)]);
}

function h3(content) {
  return element("h3", [text(content)], { id: paramCase(content) });
}

function note(content) {
  return element("em", [text(content)]);
}

function placeholder(content) {
  return element("p", [text(content)]);
}

function element(tagName, children = [], properties = {}) {
  return {
    children,
    properties,
    tagName,
    type: "element",
  };
}

function todo() {
  return text("TODO");
}

function text(value) {
  return { type: "text", value };
}

function isDescriptionComment(comment) {
  return (
    comment.value.startsWith("/ ") && isDefaultValueComment(comment) === false
  );
}

function isDefaultValueComment(comment) {
  return comment.value.startsWith("/ @default");
}

module.exports = velvetThunderComponentSignatures;
