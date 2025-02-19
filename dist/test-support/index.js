import { assert } from '@ember/debug';
import { find, select } from '@ember/test-helpers';

function velvetSelect(target, {
  index,
  text
}) {
  const element = find(target);
  assert(`[velvetSelect] No \`select\` element found matching \`${target}\`.`, element instanceof HTMLSelectElement);
  let option;
  if (typeof index === 'number') {
    option = element.options[index];
  } else {
    option = [...element.options].find(option => option.text === text);
  }
  assert('[velvetSelect] No `option` element found matching the provided `index` or `text` value.', option);
  return select(element, option.value);
}

export { velvetSelect };
//# sourceMappingURL=index.js.map
