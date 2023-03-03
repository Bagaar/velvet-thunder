import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';

interface VelvetSelectOptionSignature {
  Args: {
    /// The value of the option.
    value: unknown;

    privateOnCreate: (id: string, value: unknown) => void;
    privateOnDestroy: (id: string) => void;
    privateSelected: unknown;
  };
  Blocks: {
    default: [];
  };
  Element: HTMLOptionElement;
}

export default class VelvetSelectOption extends Component<VelvetSelectOptionSignature> {
  uniqueId = guidFor(this);

  get isSelected() {
    return this.args.value === this.args.privateSelected;
  }

  constructor(owner: unknown, args: VelvetSelectOptionSignature['Args']) {
    super(owner, args);

    this.args.privateOnCreate(this.uniqueId, this.args.value);
  }

  willDestroy() {
    super.willDestroy();

    this.args.privateOnDestroy(this.uniqueId);
  }
}
