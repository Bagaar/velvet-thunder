import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';

interface VelvetSelectOptionComponentSignature {
  Args: {
    onRegister: (id: string, value: unknown) => void;
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

    this.args.onRegister(this.uniqueId, this.args.value);
  }
}
