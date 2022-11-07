import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';

interface VelvetSelectOptionComponentSignature {
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

export default class VelvetSelectOptionComponent extends Component<VelvetSelectOptionComponentSignature> {
  uniqueId = guidFor(this);

  constructor(
    owner: unknown,
    args: VelvetSelectOptionComponentSignature['Args']
  ) {
    super(owner, args);

    this.args.onCreate(this.uniqueId, this.args.value);
  }

  willDestroy() {
    super.willDestroy();

    this.args.onDestroy(this.uniqueId);
  }
}
