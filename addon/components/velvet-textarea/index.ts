import { action } from '@ember/object';
import Component from '@glimmer/component';
import type { HTMLTextAreaElementEvent } from 'velvet-thunder/-private/types';

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
  changeHandler(event: HTMLTextAreaElementEvent) {
    this.args.onChange?.(event.target.value, event);
  }

  @action
  inputHandler(event: HTMLTextAreaElementEvent) {
    this.args.onInput?.(event.target.value, event);
  }
}
