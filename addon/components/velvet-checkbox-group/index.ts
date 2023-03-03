import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';
import type { WithBoundArgs } from '@glint/template';
import type VelvetCheckbox from 'velvet-thunder/components/velvet-checkbox';
import type { Size } from 'velvet-thunder/components/velvet-checkbox';

export type ValueAsArray = string[];
export type ValueAsObject = { [name: string]: boolean };
export type Value = ValueAsArray | ValueAsObject;

interface VelvetCheckboxGroupSignature {
  Args: {
    /// Indicate if the checkbox group is disabled.
    isDisabled?: boolean;
    /// Handle the checkbox group's `change` event.
    onChange?: (value: Value, event: Event) => void;
    /// The size of the checkboxes.
    size?: Size;
    /// The value of the checkbox group.
    value?: Value;
    /// Indicate if `@value` is an `Object` instead of an `Array`.
    valueIsObject?: boolean;
  };
  Blocks: {
    default: [
      {
        Checkbox: WithBoundArgs<
          typeof VelvetCheckbox,
          | 'isDisabled'
          | 'size'
          | 'privateGroupValue'
          | 'privateGroupValueIsObject'
          | 'privateInGroup'
          | 'privateOnChangeGroup'
        >;
      }
    ];
  };
  Element: HTMLDivElement;
}

export default class VelvetCheckboxGroup extends Component<VelvetCheckboxGroupSignature> {
  uniqueName = guidFor(this);
}
