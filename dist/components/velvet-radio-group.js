import { hash, concat } from '@ember/helper';
import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';
import { or } from 'ember-truth-helpers';
import { cn } from '../-private/helpers/cn.js';
import VelvetRadio from './velvet-radio.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

class VelvetRadioGroup extends Component {
  uniqueName = guidFor(this);
  static {
    setComponentTemplate(precompileTemplate("\n    <div class={{cn \"velvet-radio-group\" (concat \"velvet-radio-group-\" (or @size \"md\")) (if @isDisabled \"velvet-radio-group-disabled\")}} role=\"group\" ...attributes>\n      {{yield (hash Radio=(component VelvetRadio isDisabled=@isDisabled name=(or @name this.uniqueName) size=@size privateGroupValue=@value privateInGroup=true privateOnChangeGroup=@onChange))}}\n    </div>\n  ", {
      strictMode: true,
      scope: () => ({
        cn,
        concat,
        or,
        hash,
        VelvetRadio
      })
    }), this);
  }
}

export { VelvetRadioGroup as default };
//# sourceMappingURL=velvet-radio-group.js.map
