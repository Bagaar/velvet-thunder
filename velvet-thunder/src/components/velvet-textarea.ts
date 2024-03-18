import Component from '@glimmer/component';

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
}
