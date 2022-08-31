import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class VelvetInputComponent extends Component {
  @action
  changeHandler(event) {
    this.args.onChange(event.target.value, event);
  }

  @action
  inputHandler(event) {
    this.args.onInput(event.target.value, event);
  }
}
