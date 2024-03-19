import { concat } from '@ember/helper';
import { on } from '@ember/modifier';
import Component from '@glimmer/component';
import { or } from 'ember-truth-helpers';
import { cn } from '../-private/helpers/cn.ts';

export interface VelvetSwitchSignature {
  Args: {
    /// Alignment of the switch.
    /// @default ["left"]
    alignment?: 'left' | 'right';

    /// Indicate if the switch is checked.
    /// @default [false]
    isChecked?: boolean;

    /// Indicate if the switch is disabled.
    /// @default [false]
    isDisabled?: boolean;

    /// Handle the switch's `change` event.
    /// @default [undefined]
    onChange?: (isChecked: boolean, event: Event) => void;

    /// The size of the switch.
    /// @default ["md"]
    size?: 'sm' | 'md' | 'lg';
  };
  Blocks: {
    /// The label of the switch.
    default: [];
  };
  Element: HTMLInputElement;
}

export default class VelvetSwitch extends Component<VelvetSwitchSignature> {
  changeHandler = (event: Event) => {
    const { isDisabled, onChange } = this.args;

    if (typeof onChange !== 'function' || isDisabled === true) {
      return;
    }

    onChange((event.target as HTMLInputElement).checked, event);
  };

  <template>
    <label
      class={{cn
        "velvet-switch"
        (concat "velvet-switch-" (or @size "md"))
        (concat "velvet-switch-" (or @alignment "left"))
        (if @isDisabled "velvet-switch-disabled")
      }}
    >
      <input
        checked={{@isChecked}}
        class="velvet-switch-input"
        disabled={{@isDisabled}}
        type="checkbox"
        {{on "change" this.changeHandler}}
        ...attributes
      />
      <div class="velvet-switch-track">
        <div class="velvet-switch-handle"></div>
      </div>
      {{yield}}
    </label>
  </template>
}
