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
    isDisabled?: boolean;
    onChange?: (value: Value, event: Event) => void;
    size?: Size;
    value?: Value;
    valueIsObject?: boolean;
  };
  Blocks: {
    default: [
      {
        Checkbox: WithBoundArgs<
          typeof VelvetCheckbox,
          | 'groupValue'
          | 'groupValueIsObject'
          | 'inGroup'
          | 'isDisabled'
          | 'onChangeGroup'
          | 'size'
        >;
      }
    ];
  };
  Element: HTMLDivElement;
}

export default class VelvetCheckboxGroup extends Component<VelvetCheckboxGroupSignature> {
  uniqueName = guidFor(this);
}
