import { concat } from '@ember/helper';
import { on } from '@ember/modifier';
import Component from '@glimmer/component';
import { or } from 'ember-truth-helpers';
import { cn } from '../-private/helpers/cn.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

class VelvetRadio extends Component {
  get isChecked() {
    const {
      privateInGroup,
      isChecked,
      privateGroupValue,
      value
    } = this.args;
    return privateInGroup ? value === privateGroupValue : isChecked;
  }
  get valueAttr() {
    const {
      value
    } = this.args;
    return value === undefined ? undefined : String(value);
  }
  changeHandler = event => {
    if (this.args.isDisabled === true) {
      return;
    }
    const {
      privateInGroup,
      onChange,
      privateOnChangeGroup,
      value
    } = this.args;
    if (privateInGroup && typeof privateOnChangeGroup === 'function') {
      privateOnChangeGroup(value, event);
    } else if (typeof onChange === 'function') {
      onChange(event.target.checked, event);
    }
  };
  static {
    setComponentTemplate(precompileTemplate("\n    <label class={{cn \"velvet-radio\" (concat \"velvet-radio-\" (or @size \"md\")) (if @isDisabled \"velvet-radio-disabled\")}}>\n      <input checked={{this.isChecked}} class=\"velvet-radio-input form-radio\" disabled={{@isDisabled}} name={{@name}} type=\"radio\" value={{this.valueAttr}} {{on \"change\" this.changeHandler}} ...attributes />\n      {{yield}}\n    </label>\n  ", {
      strictMode: true,
      scope: () => ({
        cn,
        concat,
        or,
        on
      })
    }), this);
  }
}

export { VelvetRadio as default };
//# sourceMappingURL=velvet-radio.js.map
