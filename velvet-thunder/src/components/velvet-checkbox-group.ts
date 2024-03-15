import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';
import type { WithBoundArgs } from '@glint/template';
import VelvetCheckbox from './velvet-checkbox.ts';
import type { Size } from './velvet-checkbox.ts';

export type ValueAsArray = string[];
export type ValueAsObject = { [name: string]: boolean };
export type Value = ValueAsArray | ValueAsObject;

export interface VelvetCheckboxGroupSignature {
  Args: {
    /// Indicate if the checkbox group is disabled.
    /// @default [false]
    isDisabled?: boolean;
    /// Handle the checkbox group's `change` event.
    /// @default [undefined]
    onChange?: (value: Value, event: Event) => void;
    /// The size of the checkboxes.
    /// @default ["md"]
    size?: Size;
    /// The value of the checkbox group.
    /// @default [undefined]
    value?: Value;
    /// Indicate if `@value` is an `Object` instead of an `Array`.
    /// @default [false]
    valueIsObject?: boolean;
  };
  Blocks: {
    /// The checkboxes for the checkbox group.
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
      },
    ];
  };
  Element: HTMLDivElement;
}

export default class VelvetCheckboxGroup extends Component<VelvetCheckboxGroupSignature> {
  uniqueName = guidFor(this);
  VelvetCheckbox = VelvetCheckbox;
}
