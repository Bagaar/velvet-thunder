import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';
import { WithBoundArgs } from '@glint/template';
import type VelvetCheckboxComponent from 'velvet-thunder/components/velvet-checkbox';

export type ValueAsArray = string[];
export type ValueAsObject = { [name: string]: boolean };
export type Value = ValueAsArray | ValueAsObject;

interface VelvetCheckboxGroupComponentSignature {
  Args: {
    isDisabled?: boolean;
    onChange?: (value: Value, event: Event) => void;
    size?: string;
    value?: Value;
    valueIsObject?: boolean;
  };
  Blocks: {
    default: [
      {
        Checkbox: WithBoundArgs<
          typeof VelvetCheckboxComponent,
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

export default class VelvetCheckboxGroupComponent extends Component<VelvetCheckboxGroupComponentSignature> {
  uniqueName = guidFor(this);
}
