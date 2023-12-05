"use strict";

const { default: babelGenerator } = require("@babel/generator");
const { parse: babelParse } = require("@babel/parser");
const { default: babelTraverse } = require("@babel/traverse");
const { existsSync, readFileSync } = require("fs");

const MARKER_REG_EXP = new RegExp("<!-- args-table: (.*) -->");

function velvetThunderArgsTables() {
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

      let componentArgs = [];

      babelTraverse(componentAST, {
        TSPropertySignature(node) {
          if (node.node.key.name !== "Args") {
            return;
          }

          componentArgs = node.node.typeAnnotation.typeAnnotation.members
            .filter((node) => node.key.name.startsWith("private") === false)
            .map((node) => {
              let leadingComments = node.leadingComments || [];
              let descriptionLines = leadingComments
                .filter(isDescriptionComment)
                .map((comment) => comment.value.replace("/ ", "").trim());

              let defaultValueComment = leadingComments.find(
                isDefaultValueComment,
              );

              return {
                default: defaultValueComment
                  ? defaultValueComment.value.substring(
                      defaultValueComment.value.indexOf("[") + 1,
                      defaultValueComment.value.indexOf("]"),
                    )
                  : "TODO",
                descriptionLines,
                name: node.key.name,
                type: babelGenerator(node.typeAnnotation.typeAnnotation).code,
              };
            });
        },
      });

      if (componentArgs.length === 0) {
        return;
      }

      const componentArgsTable = element("table", [
        element("thead", [
          element("tr", [
            element("th", [text("Name")]),
            element("th", [text("Description")]),
            element("th", [text("Type")]),
            element("th", [text("Default Value")]),
          ]),
        ]),
        element(
          "tbody",
          componentArgs.map((componentArg) => {
            const descriptionElements = componentArg.descriptionLines.reduce(
              (elements, line, index) => {
                elements.push(text(line));

                if (index < componentArg.descriptionLines.length - 1) {
                  elements.push(element("br"));
                }

                return elements;
              },
              [],
            );

            return element("tr", [
              element("td", [code("@" + componentArg.name)]),
              element("td", descriptionElements),
              element("td", [code(componentArg.type)]),
              element("td", [code(componentArg.default)]),
            ]);
          }),
        ),
      ]);

      children.splice(children.indexOf(marker), 1, componentArgsTable);
    });
  };
}

function code(value) {
  return element("code", [text(value)]);
}

function element(tagName, children = []) {
  return {
    children,
    properties: {},
    tagName,
    type: "element",
  };
}

function isDescriptionComment(comment) {
  return (
    comment.value.startsWith("/ ") && isDefaultValueComment(comment) === false
  );
}

function isDefaultValueComment(comment) {
  return comment.value.startsWith("/ @default");
}

function text(value) {
  return { type: "text", value };
}

module.exports = velvetThunderArgsTables;
