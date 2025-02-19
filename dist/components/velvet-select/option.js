import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

class VelvetSelectOption extends Component {
  uniqueId = guidFor(this);
  get isSelected() {
    return this.args.value === this.args.privateSelected;
  }
  constructor(owner, args) {
    super(owner, args);
    this.args.privateOnCreate(this.uniqueId, this.args.value);
  }
  willDestroy() {
    super.willDestroy();
    this.args.privateOnDestroy(this.uniqueId);
  }
  static {
    setComponentTemplate(precompileTemplate("\n    <option selected={{this.isSelected}} value={{this.uniqueId}} ...attributes>\n      {{#if (has-block)}}\n        {{yield}}\n      {{else}}\n        {{!-- @glint-expect-error --}}\n        {{@value}}\n      {{/if}}\n    </option>\n  ", {
      strictMode: true
    }), this);
  }
}

export { VelvetSelectOption as default };
//# sourceMappingURL=option.js.map
