import { concat } from '@ember/helper';
import { on } from '@ember/modifier';
import Component from '@glimmer/component';
import { or } from 'ember-truth-helpers';
import { cn } from '../-private/helpers/cn.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

class VelvetSwitch extends Component {
  changeHandler = event => {
    const {
      isDisabled,
      onChange
    } = this.args;
    if (typeof onChange !== 'function' || isDisabled === true) {
      return;
    }
    onChange(event.target.checked, event);
  };
  static {
    setComponentTemplate(precompileTemplate("\n    <label class={{cn \"velvet-switch\" (concat \"velvet-switch-\" (or @size \"md\")) (concat \"velvet-switch-\" (or @alignment \"left\")) (if @isDisabled \"velvet-switch-disabled\")}}>\n      <input checked={{@isChecked}} class=\"velvet-switch-input\" disabled={{@isDisabled}} type=\"checkbox\" {{on \"change\" this.changeHandler}} ...attributes />\n      <div class=\"velvet-switch-track\">\n        <div class=\"velvet-switch-handle\"></div>\n      </div>\n      {{yield}}\n    </label>\n  ", {
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

export { VelvetSwitch as default };
//# sourceMappingURL=velvet-switch.js.map
