import { on } from '@ember/modifier';
import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class VelvetRadioComponent extends Component {
  on = on;

  @action
  invokeGroupHandler(handler, event) {
    handler(this.args.value, event);
  }

  invokeHandler(handler, event) {
    handler(event.target.checked, event);
  }
}
