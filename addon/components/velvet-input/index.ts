import { action } from '@ember/object';
import Component from '@glimmer/component';
import type { HTMLInputElementEvent } from 'velvet-thunder/-private/types';

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
  changeHandler(event: HTMLInputElementEvent) {
    this.args.onChange?.(event.target.value, event);
  }

  @action
  inputHandler(event: HTMLInputElementEvent) {
    this.args.onInput?.(event.target.value, event);
  }
}
