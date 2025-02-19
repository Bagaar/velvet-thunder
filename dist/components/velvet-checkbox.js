import { concat } from '@ember/helper';
import { on } from '@ember/modifier';
import Component from '@glimmer/component';
import { or } from 'ember-truth-helpers';
import { cn } from '../-private/helpers/cn.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

class VelvetCheckbox extends Component {
  get groupValueAsArray() {
    return this.args.privateGroupValue || [];
  }
  get groupValueAsObject() {
    return this.args.privateGroupValue || {};
  }
  get isCheckedInGroup() {
    const name = this.args.name;
    if (this.args.privateGroupValueIsObject) {
      return this.groupValueAsObject[name] === true;
    }
    return this.groupValueAsArray.includes(name);
  }
  changeHandler = event => {
    if (this.args.isDisabled === true) {
      return;
    }
    const {
      checked
    } = event.target;
    const {
      privateInGroup,
      onChange,
      privateOnChangeGroup
    } = this.args;
    if (privateInGroup && typeof privateOnChangeGroup === 'function') {
      const {
        groupValueAsArray,
        groupValueAsObject
      } = this;
      const {
        privateGroupValueIsObject,
        name
      } = this.args;
      let groupValue;
      if (privateGroupValueIsObject) {
        groupValue = {
          ...groupValueAsObject,
          [name]: checked
        };
      } else if (checked) {
        groupValue = [...groupValueAsArray, name];
      } else {
        groupValue = groupValueAsArray.filter(n => n !== name);
      }
      privateOnChangeGroup(groupValue, event);
    } else if (typeof onChange === 'function') {
      onChange(checked, event);
    }
  };
  static {
    setComponentTemplate(precompileTemplate("\n    <label class={{cn \"velvet-checkbox\" (concat \"velvet-checkbox-\" (or @size \"md\")) (if @isDisabled \"velvet-checkbox-disabled\")}}>\n      <input checked={{if @privateInGroup this.isCheckedInGroup @isChecked}} class=\"velvet-checkbox-input form-checkbox\" disabled={{@isDisabled}} indeterminate={{@isIndeterminate}} name={{@name}} type=\"checkbox\" {{on \"change\" this.changeHandler}} ...attributes />\n      {{yield}}\n    </label>\n  ", {
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

export { VelvetCheckbox as default };
//# sourceMappingURL=velvet-checkbox.js.map
