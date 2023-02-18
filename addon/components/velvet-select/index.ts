import { action } from '@ember/object';
import Component from '@glimmer/component';
import type { WithBoundArgs } from '@glint/template';
import type { HTMLSelectElementEvent } from 'velvet-thunder/-private/types';
import type VelvetSelectOption from 'velvet-thunder/components/velvet-select/option';

interface VelvetSelectSignature {
  Args: {
    isDisabled?: boolean;
    isInvalid?: boolean;
    isPill?: boolean;
    onChange?: (selected: unknown, event: Event) => void;
    placeholder?: string;
    selected?: unknown;
    size?: 'sm' | 'md' | 'lg';
    variant?: string | 'primary';
  };
  Blocks: {
    default: [
      {
        Option: WithBoundArgs<
          typeof VelvetSelectOption,
          'onCreate' | 'onDestroy' | 'selected'
        >;
      }
    ];
  };
  Element: HTMLSelectElement;
}

export default class VelvetSelect extends Component<VelvetSelectSignature> {
  options = new Map();

  get hasSelection() {
    return this.args.selected !== undefined && this.args.selected !== null;
  }

  get shouldDisplayPlaceholder() {
    return Boolean(this.args.placeholder) && this.hasSelection === false;
  }

  @action
  changeHandler(event: HTMLSelectElementEvent) {
    this.args.onChange?.(this.options.get(event.target.value), event);
  }

  @action
  addOption(id: string, value: unknown) {
    this.options.set(id, value);
  }

  @action
  removeOption(id: string) {
    this.options.delete(id);
  }
}
