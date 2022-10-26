import { action } from '@ember/object';
import Component from '@glimmer/component';

interface VelvetSelectComponentSignature {
  Args: {
    onChange: (value: unknown, event: Event) => void;
    placeholder: string;
    selected: unknown;
  };
}

export default class VelvetSelectComponent extends Component<VelvetSelectComponentSignature> {
  options = new Map();

  get hasSelection() {
    return this.args.selected !== undefined && this.args.selected !== null;
  }

  get shouldDisplayPlaceholder() {
    return Boolean(this.args.placeholder) && this.hasSelection === false;
  }

  @action
  changeHandler(event: Event) {
    this.args.onChange(
      this.options.get((event.target as HTMLSelectElement).value),
      event
    );
  }

  @action
  registerOption(id: string, value: unknown) {
    this.options.set(id, value);
  }
}
