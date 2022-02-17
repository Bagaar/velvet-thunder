import { on } from '@ember/modifier';
import Component from '@glimmer/component';

export default class VelvetRadioComponent extends Component {
  on = on;

  invokeHandler(handler, event) {
    handler(event.target.checked, event);
  }
}
