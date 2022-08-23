import { on } from '@ember/modifier';
import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class VelvetInputComponent extends Component {
  on = on;

  @action
  changeHandler(event) {
    this.args.onChange(event.target.value, event);
  }

  @action
  inputHandler(event) {
    this.args.onInput(event.target.value, event);
  }
}
