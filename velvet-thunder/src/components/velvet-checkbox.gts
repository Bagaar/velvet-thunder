import { concat } from '@ember/helper';
import { on } from '@ember/modifier';
import Component from '@glimmer/component';
import { or } from 'ember-truth-helpers';
import { cn } from '../-private/helpers/cn.ts';
import type {
  Value as GroupValue,
  ValueAsArray as GroupValueAsArray,
  ValueAsObject as GroupValueAsObject,
} from './velvet-checkbox-group.gts';

export type Size = 'sm' | 'md' | 'lg';

export interface VelvetCheckboxSignature {
  Args: {
    /// Indicate if the checkbox is checked.
    /// @default [false]
    isChecked?: boolean;

    /// Indicate if the checkbox is disabled.
    /// @default [false]
    isDisabled?: boolean;

    /// Indicate if the checkbox is indeterminate.
    /// @default [false]
    isIndeterminate?: boolean;

    /// The name of the checkbox.
    /// @default [""]
    name?: string;

    /// Handle the checkbox's `change` event.
    /// @default [undefined]
    onChange?: (value: boolean, event: Event) => void;

    /// The size of the checkbox.
    /// @default ["md"]
    size?: Size;

    privateGroupValue?: GroupValue;
    privateGroupValueIsObject?: boolean;
    privateInGroup?: boolean;
    privateOnChangeGroup?: (value: GroupValue, event: Event) => void;
  };
  Blocks: {
    /// The label of the checkbox.
    default: [];
  };
  Element: HTMLInputElement;
}

export default class VelvetCheckbox extends Component<VelvetCheckboxSignature> {
  get groupValueAsArray() {
    return (this.args.privateGroupValue || []) as GroupValueAsArray;
  }

  get groupValueAsObject() {
    return (this.args.privateGroupValue || {}) as GroupValueAsObject;
  }

  get isCheckedInGroup() {
    const name = this.args.name as string;

    if (this.args.privateGroupValueIsObject) {
      return this.groupValueAsObject[name] === true;
    }

    return this.groupValueAsArray.includes(name);
  }

  changeHandler = (event: Event) => {
    if (this.args.isDisabled === true) {
      return;
    }

    const { checked } = event.target as HTMLInputElement;
    const { privateInGroup, onChange, privateOnChangeGroup } = this.args;

    if (privateInGroup && typeof privateOnChangeGroup === 'function') {
      const { groupValueAsArray, groupValueAsObject } = this;
      const { privateGroupValueIsObject, name } = this.args;

      let groupValue;

      if (privateGroupValueIsObject) {
        groupValue = { ...groupValueAsObject, [name as string]: checked };
      } else if (checked) {
        groupValue = [...groupValueAsArray, name];
      } else {
        groupValue = groupValueAsArray.filter((n) => n !== name);
      }

      privateOnChangeGroup(groupValue as GroupValue, event);
    } else if (typeof onChange === 'function') {
      onChange(checked, event);
    }
  };

  <template>
    <label
      class={{cn
        "velvet-checkbox"
        (concat "velvet-checkbox-" (or @size "md"))
        (if @isDisabled "velvet-checkbox-disabled")
      }}
    >
      <input
        checked={{if @privateInGroup this.isCheckedInGroup @isChecked}}
        class="velvet-checkbox-input form-checkbox"
        disabled={{@isDisabled}}
        indeterminate={{@isIndeterminate}}
        name={{@name}}
        type="checkbox"
        {{on "change" this.changeHandler}}
        ...attributes
      />
      {{yield}}
    </label>
  </template>
}
