import { concat } from '@ember/helper';
import { on } from '@ember/modifier';
import Component from '@glimmer/component';
import { or } from 'ember-truth-helpers';
import { cn } from '../-private/helpers/cn.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

class VelvetInput extends Component {
  changeHandler = event => {
    const {
      isDisabled,
      onChange
    } = this.args;
    if (typeof onChange !== 'function' || isDisabled === true) {
      return;
    }
    onChange(event.target.value, event);
  };
  inputHandler = event => {
    const {
      isDisabled,
      onInput
    } = this.args;
    if (typeof onInput !== 'function' || isDisabled === true) {
      return;
    }
    onInput(event.target.value, event);
  };
  static {
    setComponentTemplate(precompileTemplate("\n    <input class={{cn \"velvet-input\" (concat \"velvet-input-\" (or @size \"md\")) (concat \"velvet-input-\" (or @variant \"primary\")) (if @isInvalid \"velvet-input-invalid\") (if @isPill \"velvet-input-pill\") (if @isDisabled \"velvet-input-disabled\") \"form-input\"}} disabled={{@isDisabled}} placeholder={{@placeholder}} type={{or @type \"text\"}} value={{@value}} {{on \"change\" this.changeHandler}} {{on \"input\" this.inputHandler}} ...attributes />\n  ", {
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

export { VelvetInput as default };
//# sourceMappingURL=velvet-input.js.map
