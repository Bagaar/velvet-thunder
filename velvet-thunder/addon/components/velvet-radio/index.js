import { on } from '@ember/modifier';
import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class VelvetRadioComponent extends Component {
  on = on;

  @action
  changeHandler(event) {
    this.args.onChange(event.target.checked, event);
  }

  @action
  changeGroupHandler(event) {
    this.args.onChange(this.args.value, event);
  }
}
