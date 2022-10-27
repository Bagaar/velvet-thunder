import { action } from '@ember/object';
import Component from '@glimmer/component';

interface VelvetInputComponentSignature {
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

export default class VelvetInputComponent extends Component<VelvetInputComponentSignature> {
  @action
  changeHandler(event: Event) {
    this.args.onChange?.((event.target as HTMLInputElement).value, event);
  }

  @action
  inputHandler(event: Event) {
    this.args.onInput?.((event.target as HTMLInputElement).value, event);
  }
}
