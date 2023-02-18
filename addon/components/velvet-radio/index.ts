import { action } from '@ember/object';
import Component from '@glimmer/component';

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
  get isChecked() {
    const { inGroup, isChecked, groupValue, value } = this.args;

    return inGroup ? value === groupValue : isChecked;
  }

  get valueAttr() {
    const { value } = this.args;

    return value === undefined ? undefined : String(value);
  }

  @action
  changeHandler(event: Event) {
    if (this.args.isDisabled === true) {
      return;
    }

    const { inGroup, onChange, onChangeGroup, value } = this.args;

    if (inGroup && typeof onChangeGroup === 'function') {
      onChangeGroup(value, event);
    } else if (typeof onChange === 'function') {
      onChange((event.target as HTMLInputElement).checked, event);
    }
  }
}
