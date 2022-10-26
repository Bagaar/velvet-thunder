import { action } from '@ember/object';
import Component from '@glimmer/component';

interface VelvetRadioComponentSignature {
  Args: {
    isChecked?: boolean;
    isDisabled?: boolean;
    name?: string;
    onChange?: (isChecked: boolean, event: Event) => void;
    size?: string;
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

export default class VelvetRadioComponent extends Component<VelvetRadioComponentSignature> {
  @action
  changeHandler(event: Event) {
    this.args.onChange?.((event.target as HTMLInputElement).checked, event);
  }

  @action
  changeGroupHandler(event: Event) {
    this.args.onChangeGroup?.(this.args.value, event);
  }
}
