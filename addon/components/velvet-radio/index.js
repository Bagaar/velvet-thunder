import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class VelvetRadioComponent extends Component {
  @action
  changeHandler(event) {
    this.args.onChange(event.target.checked, event);
  }

  @action
  changeGroupHandler(event) {
    this.args.onChange(this.args.value, event);
  }
}
