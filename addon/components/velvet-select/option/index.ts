import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';

interface VelvetSelectOptionSignature {
  Args: {
    onCreate: (id: string, value: unknown) => void;
    onDestroy: (id: string) => void;
    selected: unknown;
    value: unknown;
  };
  Blocks: {
    default: [];
  };
  Element: HTMLOptionElement;
}

export default class VelvetSelectOption extends Component<VelvetSelectOptionSignature> {
  uniqueId = guidFor(this);

  get isSelected() {
    return this.args.value === this.args.selected;
  }

  constructor(owner: unknown, args: VelvetSelectOptionSignature['Args']) {
    super(owner, args);

    this.args.onCreate(this.uniqueId, this.args.value);
  }

  willDestroy() {
    super.willDestroy();

    this.args.onDestroy(this.uniqueId);
  }
}
