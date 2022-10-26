import { action } from '@ember/object';
import Component from '@glimmer/component';

interface VelvetTextareaComponentSignature {
  Args: {
    onChange: (value: string, event: Event) => void;
    onInput: (value: string, event: Event) => void;
  };
}

export default class VelvetTextareaComponent extends Component<VelvetTextareaComponentSignature> {
  @action
  changeHandler(event: Event) {
    this.args.onChange((event.target as HTMLTextAreaElement).value, event);
  }

  @action
  inputHandler(event: Event) {
    this.args.onInput((event.target as HTMLTextAreaElement).value, event);
  }
}
