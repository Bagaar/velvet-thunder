import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';
import type { WithBoundArgs } from '@glint/template';
import VelvetRadio from './velvet-radio.ts';
import type { Size } from './velvet-radio.ts';

export interface VelvetRadioGroupSignature {
  Args: {
    /// Indicate if the radio group is disabled.
    /// @default [false]
    isDisabled?: boolean;
    /// The name of the radio group.
    /// @default [""]
    name?: string;
    /// Handle the radio group's `change` event.
    /// @default [undefined]
    onChange?: (value: unknown, event: Event) => void;
    /// The size of the radios.
    /// @default ["md"]
    size?: Size;
    /// The value of the radio group.
    /// @default [undefined]
    value?: unknown;
  };
  Blocks: {
    /// The radios for the radio group.
    default: [
      {
        Radio: WithBoundArgs<
          typeof VelvetRadio,
          | 'isDisabled'
          | 'name'
          | 'size'
          | 'privateGroupValue'
          | 'privateInGroup'
          | 'privateOnChangeGroup'
        >;
      },
    ];
  };
  Element: HTMLDivElement;
}

export default class VelvetRadioGroup extends Component<VelvetRadioGroupSignature> {
  uniqueName = guidFor(this);
  VelvetRadio = VelvetRadio;
}
