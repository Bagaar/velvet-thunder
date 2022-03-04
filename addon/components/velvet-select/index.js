import { on } from '@ember/modifier';
import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class VelvetSelectComponent extends Component {
  on = on;

  @action
  changeHandler(event) {
    this.args.onChange(event.target.value, event);
  }
}
