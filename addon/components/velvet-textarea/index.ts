import { action } from '@ember/object';
import Component from '@glimmer/component';

interface VelvetTextareaSignature {
  Args: {
    isDisabled?: boolean;
    isInvalid?: boolean;
    onChange?: (value: string, event: Event) => void;
    onInput?: (value: string, event: Event) => void;
    placeholder?: string;
    size?: 'sm' | 'md' | 'lg';
    value?: string;
    variant?: string | 'primary';
  };
  Element: HTMLTextAreaElement;
}

export default class VelvetTextarea extends Component<VelvetTextareaSignature> {
  @action
  changeHandler(event: Event) {
    const { isDisabled, onChange } = this.args;

    if (typeof onChange !== 'function' || isDisabled === true) {
      return;
    }

    onChange((event.target as HTMLTextAreaElement).value, event);
  }

  @action
  inputHandler(event: Event) {
    const { isDisabled, onInput } = this.args;

    if (typeof onInput !== 'function' || isDisabled === true) {
      return;
    }

    onInput((event.target as HTMLTextAreaElement).value, event);
  }
}
