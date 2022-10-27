import { action } from '@ember/object';
import Component from '@glimmer/component';
import type {
  Value as GroupValue,
  ValueAsArray as GroupValueAsArray,
  ValueAsObject as GroupValueAsObject,
} from 'velvet-thunder/components/velvet-checkbox-group';

export type Size = 'sm' | 'md' | 'lg';

interface VelvetCheckboxComponentSignature {
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

export default class VelvetCheckboxComponent extends Component<VelvetCheckboxComponentSignature> {
  get groupValueAsArray() {
    return (this.args.groupValue || []) as GroupValueAsArray;
  }

  get groupValueAsObject() {
    return (this.args.groupValue || {}) as GroupValueAsObject;
  }

  get isCheckedInGroup() {
    if (this.args.groupValueIsObject) {
      return this.groupValueAsObject[this.args.name as string] === true;
    }

    return this.groupValueAsArray.includes(this.args.name as string);
  }

  @action
  changeHandler(event: Event) {
    this.args.onChange?.((event.target as HTMLInputElement).checked, event);
  }

  @action
  changeGroupHandler(event: Event) {
    let groupValue;

    if (this.args.groupValueIsObject) {
      groupValue = {
        ...this.groupValueAsObject,
        [this.args.name as string]: (event.target as HTMLInputElement).checked,
      };
    } else if ((event.target as HTMLInputElement).checked) {
      groupValue = [...this.groupValueAsArray, this.args.name];
    } else {
      groupValue = this.groupValueAsArray.filter(
        (name) => name !== this.args.name
      );
    }

    this.args.onChangeGroup?.(groupValue as GroupValue, event);
  }
}
