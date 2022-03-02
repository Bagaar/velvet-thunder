import { on } from '@ember/modifier';
import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class VelvetCheckboxComponent extends Component {
  on = on;

  @action
  invokeGroupHandler(handler, event) {
    const value = {
      ...this.args.groupValue,
      [this.args.name]: event.target.checked,
    };

    handler(value, event);
  }

  invokeHandler(handler, event) {
    handler(event.target.checked, event);
  }
}
