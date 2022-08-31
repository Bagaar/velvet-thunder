import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class VelvetSelectComponent extends Component {
  options = new Map();

  get hasSelection() {
    return this.args.selected !== undefined && this.args.selected !== null;
  }

  get shouldDisplayPlaceholder() {
    return Boolean(this.args.placeholder) && this.hasSelection === false;
  }

  @action
  changeHandler(event) {
    this.args.onChange(this.options.get(event.target.value), event);
  }

  @action
  registerOption(id, value) {
    this.options.set(id, value);
  }
}
