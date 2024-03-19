import { concat, hash } from '@ember/helper';
import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';
import type { WithBoundArgs } from '@glint/template';
import { or } from 'ember-truth-helpers';
import { cn } from '../-private/helpers/cn.ts';
import VelvetRadio from './velvet-radio.gts';
import type { Size } from './velvet-radio.gts';

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

  <template>
    <div
      class={{cn
        "velvet-radio-group"
        (concat "velvet-radio-group-" (or @size "md"))
        (if @isDisabled "velvet-radio-group-disabled")
      }}
      role="group"
      ...attributes
    >
      {{yield
        (hash
          Radio=(component
            VelvetRadio
            isDisabled=@isDisabled
            name=(or @name this.uniqueName)
            size=@size
            privateGroupValue=@value
            privateInGroup=true
            privateOnChangeGroup=@onChange
          )
        )
      }}
    </div>
  </template>
}
