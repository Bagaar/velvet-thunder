import Component from '@glimmer/component';

interface VelvetTextareaSignature {
  Args: {
    /// Indicate if the textarea is disabled.
    isDisabled?: boolean;
    /// Indicate if the textarea is invalid.
    isInvalid?: boolean;
    /// Handle the textarea's `change` event.
    onChange?: (value: string, event: Event) => void;
    /// Handle the textarea's `input` event.
    onInput?: (value: string, event: Event) => void;
    /// The placeholder of the textarea.
    placeholder?: string;
    /// The size of the textarea.
    size?: 'sm' | 'md' | 'lg';
    /// The value of the textarea.
    value?: string;
    /// The appearance of the textarea.
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
