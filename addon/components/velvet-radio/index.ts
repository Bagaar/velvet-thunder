import { action } from '@ember/object';
import Component from '@glimmer/component';

interface VelvetRadioComponentSignature {
  Args: {
    // TODO: Add separate `onChange` argument for groups.
    onChange: (value: boolean | unknown, event: Event) => void;
    value: unknown;
  };
}

export default class VelvetRadioComponent extends Component<VelvetRadioComponentSignature> {
  @action
  changeHandler(event: Event) {
    this.args.onChange((event.target as HTMLInputElement).checked, event);
  }

  @action
  changeGroupHandler(event: Event) {
    this.args.onChange(this.args.value, event);
  }
}
