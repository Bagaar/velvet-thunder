import { action } from '@ember/object';
import Component from '@glimmer/component';

interface VelvetTextareaComponentSignature {
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

export default class VelvetTextareaComponent extends Component<VelvetTextareaComponentSignature> {
  @action
  changeHandler(event: Event) {
    this.args.onChange?.((event.target as HTMLTextAreaElement).value, event);
  }

  @action
  inputHandler(event: Event) {
    this.args.onInput?.((event.target as HTMLTextAreaElement).value, event);
  }
}
