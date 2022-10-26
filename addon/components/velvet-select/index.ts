import { action } from '@ember/object';
import Component from '@glimmer/component';
import { WithBoundArgs } from '@glint/template';
import type VelvetSelectOptionComponent from 'velvet-thunder/components/velvet-select/option';

interface VelvetSelectComponentSignature {
  Args: {
    isDisabled?: boolean;
    isInvalid?: boolean;
    isPill?: boolean;
    onChange?: (selected: unknown, event: Event) => void;
    placeholder?: string;
    selected?: unknown;
    size?: string;
    variant?: string;
  };
  Blocks: {
    default: [
      {
        Option: WithBoundArgs<
          typeof VelvetSelectOptionComponent,
          'onRegister' | 'selected'
        >;
      }
    ];
  };
  Element: HTMLSelectElement;
}

export default class VelvetSelectComponent extends Component<VelvetSelectComponentSignature> {
  options = new Map();

  get hasSelection() {
    return this.args.selected !== undefined && this.args.selected !== null;
  }

  get shouldDisplayPlaceholder() {
    return Boolean(this.args.placeholder) && this.hasSelection === false;
  }

  @action
  changeHandler(event: Event) {
    this.args.onChange?.(
      this.options.get((event.target as HTMLSelectElement).value),
      event
    );
  }

  @action
  registerOption(id: string, value: unknown) {
    this.options.set(id, value);
  }
}
