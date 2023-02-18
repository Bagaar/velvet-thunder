import { action } from '@ember/object';
import Component from '@glimmer/component';
import type { HTMLInputElementEvent } from 'velvet-thunder/-private/types';

export type Size = 'sm' | 'md' | 'lg';

interface VelvetRadioSignature {
  Args: {
    isChecked?: boolean;
    isDisabled?: boolean;
    name?: string;
    onChange?: (isChecked: boolean, event: Event) => void;
    size?: Size;
    value?: unknown;

    // Private:
    groupValue?: unknown;
    inGroup?: boolean;
    onChangeGroup?: (value: unknown, event: Event) => void;
  };
  Blocks: {
    default: [];
  };
  Element: HTMLInputElement;
}

export default class VelvetRadio extends Component<VelvetRadioSignature> {
  @action
  changeHandler(event: HTMLInputElementEvent) {
    this.args.onChange?.(event.target.checked, event);
  }

  @action
  changeGroupHandler(event: HTMLInputElementEvent) {
    this.args.onChangeGroup?.(this.args.value, event);
  }
}
