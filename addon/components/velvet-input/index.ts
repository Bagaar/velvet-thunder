import { action } from '@ember/object';
import Component from '@glimmer/component';

interface VelvetInputComponentSignature {
  Args: {
    onChange: (value: string, event: Event) => void;
    onInput: (value: string, event: Event) => void;
  };
}

export default class VelvetInputComponent extends Component<VelvetInputComponentSignature> {
  @action
  changeHandler(event: Event) {
    this.args.onChange((event.target as HTMLInputElement).value, event);
  }

  @action
  inputHandler(event: Event) {
    this.args.onInput((event.target as HTMLInputElement).value, event);
  }
}
