import { action } from '@ember/object';
import Component from '@glimmer/component';

type GroupValueArray = string[];
type GroupValueObject = { [name: string]: boolean };
type GroupValue = GroupValueArray | GroupValueObject;

interface VelvetCheckboxComponentSignature {
  Args: {
    groupValue: GroupValue;
    groupValueIsObject: boolean;
    name: string;
    // TODO: Add separate `onChange` argument for groups.
    onChange: (value: boolean | GroupValue, event: Event) => void;
  };
}

export default class VelvetCheckboxComponent extends Component<VelvetCheckboxComponentSignature> {
  get groupValue() {
    return this.args.groupValue || (this.args.groupValueIsObject ? {} : []);
  }

  get isCheckedInGroup() {
    if (this.args.groupValueIsObject) {
      return (this.groupValue as GroupValueObject)[this.args.name] === true;
    }

    return (this.groupValue as GroupValueArray).includes(this.args.name);
  }

  @action
  changeHandler(event: Event) {
    this.args.onChange((event.target as HTMLInputElement).checked, event);
  }

  @action
  changeGroupHandler(event: Event) {
    let groupValue;

    if (this.args.groupValueIsObject) {
      groupValue = {
        ...this.groupValue,
        [this.args.name]: (event.target as HTMLInputElement).checked,
      };
    } else if ((event.target as HTMLInputElement).checked) {
      groupValue = [...(this.groupValue as GroupValueArray), this.args.name];
    } else {
      groupValue = (this.groupValue as GroupValueArray).filter(
        (name) => name !== this.args.name
      );
    }

    this.args.onChange(groupValue, event);
  }
}
