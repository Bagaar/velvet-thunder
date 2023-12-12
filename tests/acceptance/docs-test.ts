import { visit } from "@ember/test-helpers";
import percySnapshot from "@percy/ember";
import { setupApplicationTest } from "dummy/tests/helpers";
import { module, test } from "qunit";

const COMPONENTS = [
  "avatar",
  "button",
  "checkbox",
  "checkbox-group",
  "disclosure",
  "dropdown",
  "icon-button",
  "icon-link",
  "input",
  "link",
  "progress",
  "radio",
  "radio-group",
  "select",
  "spinner",
  "switch",
  "tag",
  "textarea",
  "tooltip",
];

module("Acceptance | docs", function (hooks) {
  setupApplicationTest(hooks);

  COMPONENTS.forEach((component) => {
    const url = `/docs/components/${component}`;

    test(`visiting ${url}`, async function (assert) {
      await visit(url);
      await percySnapshot(component);

      assert.dom().doesNotIncludeText("TODO");
    });
  });
});
