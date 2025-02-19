import { hash, concat } from '@ember/helper';
import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';
import { or } from 'ember-truth-helpers';
import { cn } from '../-private/helpers/cn.js';
import VelvetCheckbox from './velvet-checkbox.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

class VelvetCheckboxGroup extends Component {
  uniqueName = guidFor(this);
  static {
    setComponentTemplate(precompileTemplate("\n    <div class={{cn \"velvet-checkbox-group\" (concat \"velvet-checkbox-group-\" (or @size \"md\")) (if @isDisabled \"velvet-checkbox-group-disabled\")}} role=\"group\" ...attributes>\n      {{yield (hash Checkbox=(component VelvetCheckbox isDisabled=@isDisabled size=@size privateGroupValue=@value privateGroupValueIsObject=@valueIsObject privateInGroup=true privateOnChangeGroup=@onChange))}}\n    </div>\n  ", {
      strictMode: true,
      scope: () => ({
        cn,
        concat,
        or,
        hash,
        VelvetCheckbox
      })
    }), this);
  }
}

export { VelvetCheckboxGroup as default };
//# sourceMappingURL=velvet-checkbox-group.js.map
