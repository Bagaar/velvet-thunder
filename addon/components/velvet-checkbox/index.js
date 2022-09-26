import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class VelvetCheckboxComponent extends Component {
  get groupValue() {
    return this.args.groupValue || (this.args.groupValueIsObject ? {} : []);
  }

  get isCheckedInGroup() {
    if (this.args.groupValueIsObject) {
      return this.groupValue[this.args.name] === true;
    }

    return this.groupValue.includes(this.args.name);
  }

  @action
  changeHandler(event) {
    this.args.onChange(event.target.checked, event);
  }

  @action
  changeGroupHandler(event) {
    let groupValue;

    if (this.args.groupValueIsObject) {
      groupValue = {
        ...this.groupValue,
        [this.args.name]: event.target.checked,
      };
    } else if (event.target.checked) {
      groupValue = [...this.groupValue, this.args.name];
    } else {
      groupValue = this.groupValue.filter((name) => name !== this.args.name);
    }

    this.args.onChange(groupValue, event);
  }
}
