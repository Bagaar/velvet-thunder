import { on } from '@ember/modifier';
import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class VelvetSelectComponent extends Component {
  on = on;
  options = new Map();

  get hasSelection() {
    return [...this.options.values()].includes(this.args.selected);
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
