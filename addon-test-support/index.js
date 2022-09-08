import { assert } from '@ember/debug';
import { find, select } from '@ember/test-helpers';

export function velvetSelect(target, { index, text }) {
  const element = find(target);

  assert(
    `velvetSelect: No select element found matching "${target}".`,
    element
  );

  let option;

  if (Number.isInteger(index)) {
    option = element.options[index];
  } else {
    option = [...element.options].find((option) => option.text === text);
  }

  assert(
    'velvetSelect: No option element found matching the provided index or text value.',
    option
  );

  return select(element, option.value);
}
