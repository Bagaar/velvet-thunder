import { action } from '@ember/object';
import Component from '@glimmer/component';

interface VelvetInputSignature {
  Args: {
    isDisabled?: boolean;
    isInvalid?: boolean;
    isPill?: boolean;
    onChange?: (value: string, event: Event) => void;
    onInput?: (value: string, event: Event) => void;
    placeholder?: string;
    size?: 'sm' | 'md' | 'lg';
    type?: string;
    value?: string;
    variant?: string | 'primary';
  };
  Element: HTMLInputElement;
}

export default class VelvetInput extends Component<VelvetInputSignature> {
  @action
  changeHandler(event: Event) {
    const { isDisabled, onChange } = this.args;

    if (typeof onChange !== 'function' || isDisabled === true) {
      return;
    }

    onChange((event.target as HTMLInputElement).value, event);
  }

  @action
  inputHandler(event: Event) {
    const { isDisabled, onInput } = this.args;

    if (typeof onInput !== 'function' || isDisabled === true) {
      return;
    }

    onInput((event.target as HTMLInputElement).value, event);
  }
}
