import { action } from '@ember/object';
import Component from '@glimmer/component';
import type {
  Value as GroupValue,
  ValueAsArray as GroupValueAsArray,
  ValueAsObject as GroupValueAsObject,
} from 'velvet-thunder/components/velvet-checkbox-group';

export type Size = 'sm' | 'md' | 'lg';

interface VelvetCheckboxSignature {
  Args: {
    isChecked?: boolean;
    isDisabled?: boolean;
    isIndeterminate?: boolean;
    name?: string;
    onChange?: (value: boolean, event: Event) => void;
    size?: Size;

    // Private:
    groupValue?: GroupValue;
    groupValueIsObject?: boolean;
    inGroup?: boolean;
    onChangeGroup?: (value: GroupValue, event: Event) => void;
  };
  Blocks: {
    default: [];
  };
  Element: HTMLInputElement;
}

export default class VelvetCheckbox extends Component<VelvetCheckboxSignature> {
  get groupValueAsArray() {
    return (this.args.groupValue || []) as GroupValueAsArray;
  }

  get groupValueAsObject() {
    return (this.args.groupValue || {}) as GroupValueAsObject;
  }

  get isCheckedInGroup() {
    const name = this.args.name as string;

    if (this.args.groupValueIsObject) {
      return this.groupValueAsObject[name] === true;
    }

    return this.groupValueAsArray.includes(name);
  }

  @action
  changeHandler(event: Event) {
    if (this.args.isDisabled === true) {
      return;
    }

    const { checked } = event.target as HTMLInputElement;
    const { inGroup, onChange, onChangeGroup } = this.args;

    if (inGroup && typeof onChangeGroup === 'function') {
      const { groupValueAsArray, groupValueAsObject } = this;
      const { groupValueIsObject, name } = this.args;

      let groupValue;

      if (groupValueIsObject) {
        groupValue = { ...groupValueAsObject, [name as string]: checked };
      } else if (checked) {
        groupValue = [...groupValueAsArray, name];
      } else {
        groupValue = groupValueAsArray.filter((n) => n !== name);
      }

      onChangeGroup(groupValue as GroupValue, event);
    } else if (typeof onChange === 'function') {
      onChange(checked, event);
    }
  }
}
