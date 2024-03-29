import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';

export interface VelvetSelectOptionSignature {
  Args: {
    /// The value of the option.
    /// @default [undefined]
    value: unknown;

    privateOnCreate: (id: string, value: unknown) => void;
    privateOnDestroy: (id: string) => void;
    privateSelected: unknown;
  };
  Blocks: {
    /// The label of the option.
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

  <template>
    <option selected={{this.isSelected}} value={{this.uniqueId}} ...attributes>
      {{#if (has-block)}}
        {{yield}}
      {{else}}
        {{! @glint-expect-error }}
        {{@value}}
      {{/if}}
    </option>
  </template>
}
