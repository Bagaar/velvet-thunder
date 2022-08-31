import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class VelvetCheckboxComponent extends Component {
  @action
  changeHandler(event) {
    this.args.onChange(event.target.checked, event);
  }

  @action
  changeGroupHandler(event) {
    const value = {
      ...this.args.groupValue,
      [this.args.name]: event.target.checked,
    };

    this.args.onChange(value, event);
  }
}
