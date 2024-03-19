import { concat } from '@ember/helper';
import { on } from '@ember/modifier';
import Component from '@glimmer/component';
import { or } from 'ember-truth-helpers';
import { cn } from '../-private/helpers/cn.ts';

export interface VelvetTextareaSignature {
  Args: {
    /// Indicate if the textarea is disabled.
    /// @default [false]
    isDisabled?: boolean;

    /// Indicate if the textarea is invalid.
    /// @default [false]
    isInvalid?: boolean;

    /// Handle the textarea's `change` event.
    /// @default [undefined]
    onChange?: (value: string, event: Event) => void;

    /// Handle the textarea's `input` event.
    /// @default [undefined]
    onInput?: (value: string, event: Event) => void;

    /// The placeholder of the textarea.
    /// @default [""]
    placeholder?: string;

    /// The size of the textarea.
    /// @default ["md"]
    size?: 'sm' | 'md' | 'lg';

    /// The value of the textarea.
    /// @default [""]
    value?: string;

    /// The appearance of the textarea.
    /// @default ["primary"]
    variant?: string | 'primary';
  };
  Element: HTMLTextAreaElement;
}

export default class VelvetTextarea extends Component<VelvetTextareaSignature> {
  changeHandler = (event: Event) => {
    const { isDisabled, onChange } = this.args;

    if (typeof onChange !== 'function' || isDisabled === true) {
      return;
    }

    onChange((event.target as HTMLTextAreaElement).value, event);
  };

  inputHandler = (event: Event) => {
    const { isDisabled, onInput } = this.args;

    if (typeof onInput !== 'function' || isDisabled === true) {
      return;
    }

    onInput((event.target as HTMLTextAreaElement).value, event);
  };

  <template>
    <textarea
      class={{cn
        "velvet-textarea"
        (concat "velvet-textarea-" (or @size "md"))
        (concat "velvet-textarea-" (or @variant "primary"))
        (if @isInvalid "velvet-textarea-invalid")
        (if @isDisabled "velvet-textarea-disabled")
        "form-textarea"
      }}
      disabled={{@isDisabled}}
      placeholder={{@placeholder}}
      value={{@value}}
      {{on "change" this.changeHandler}}
      {{on "input" this.inputHandler}}
      ...attributes
    ></textarea>
  </template>
}
