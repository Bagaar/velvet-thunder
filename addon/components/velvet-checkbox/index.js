import { on } from '@ember/modifier';
import Component from '@glimmer/component';

export default class VelvetCheckboxComponent extends Component {
  on = on;

  invokeHandler(handler, event) {
    handler(event.target.checked, event);
  }
}
