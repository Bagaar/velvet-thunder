import { concat } from '@ember/helper';
import { on } from '@ember/modifier';
import Component from '@glimmer/component';
import { or } from 'ember-truth-helpers';
import { cn } from '../-private/helpers/cn.ts';

export interface VelvetInputSignature {
  Args: {
    /// Indicate if the input is disabled.
    /// @default [false]
    isDisabled?: boolean;

    /// Indicate if the input is invalid.
    /// @default [false]
    isInvalid?: boolean;

    /// Indicate if the input is pill shaped.
    /// @default [false]
    isPill?: boolean;

    /// Handle the input's `change` event.
    /// @default [undefined]
    onChange?: (value: string, event: Event) => void;

    /// Handle the input's `input` event.
    /// @default [undefined]
    onInput?: (value: string, event: Event) => void;

    /// The placeholder of the input.
    /// @default [""]
    placeholder?: string;

    /// The size of the input.
    /// @default ["md"]
    size?: 'sm' | 'md' | 'lg';

    /// The type of the input.
    /// @default [""]
    type?: string;

    /// The value of the input.
    /// @default [""]
    value?: string;

    /// The appearance of the input.
    /// @default ["primary"]
    variant?: string | 'primary';
  };
  Element: HTMLInputElement;
}

export default class VelvetInput extends Component<VelvetInputSignature> {
  changeHandler = (event: Event) => {
    const { isDisabled, onChange } = this.args;

    if (typeof onChange !== 'function' || isDisabled === true) {
      return;
    }

    onChange((event.target as HTMLInputElement).value, event);
  };

  inputHandler = (event: Event) => {
    const { isDisabled, onInput } = this.args;

    if (typeof onInput !== 'function' || isDisabled === true) {
      return;
    }

    onInput((event.target as HTMLInputElement).value, event);
  };

  <template>
    <input
      class={{cn
        "velvet-input"
        (concat "velvet-input-" (or @size "md"))
        (concat "velvet-input-" (or @variant "primary"))
        (if @isInvalid "velvet-input-invalid")
        (if @isPill "velvet-input-pill")
        (if @isDisabled "velvet-input-disabled")
        "form-input"
      }}
      disabled={{@isDisabled}}
      placeholder={{@placeholder}}
      type={{or @type "text"}}
      value={{@value}}
      {{on "change" this.changeHandler}}
      {{on "input" this.inputHandler}}
      ...attributes
    />
  </template>
}
