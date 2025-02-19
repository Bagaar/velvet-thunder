import { concat } from '@ember/helper';
import { on } from '@ember/modifier';
import Component from '@glimmer/component';
import { or } from 'ember-truth-helpers';
import { cn } from '../-private/helpers/cn.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

class VelvetTextarea extends Component {
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
    setComponentTemplate(precompileTemplate("\n    <textarea class={{cn \"velvet-textarea\" (concat \"velvet-textarea-\" (or @size \"md\")) (concat \"velvet-textarea-\" (or @variant \"primary\")) (if @isInvalid \"velvet-textarea-invalid\") (if @isDisabled \"velvet-textarea-disabled\") \"form-textarea\"}} disabled={{@isDisabled}} placeholder={{@placeholder}} value={{@value}} {{on \"change\" this.changeHandler}} {{on \"input\" this.inputHandler}} ...attributes></textarea>\n  ", {
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

export { VelvetTextarea as default };
//# sourceMappingURL=velvet-textarea.js.map
