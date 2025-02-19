import { concat } from '@ember/helper';
import { htmlSafe } from '@ember/template';
import Component from '@glimmer/component';
import { or } from 'ember-truth-helpers';
import { cn } from '../-private/helpers/cn.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

class VelvetProgress extends Component {
  get lineStyle() {
    const {
      max,
      min,
      value
    } = this;
    const progress = Math.floor((value - min) / (max - min) * 100);
    const progressClipped = Math.max(0, Math.min(100, progress));
    return htmlSafe(`width: ${progressClipped}%;`);
  }
  get max() {
    return typeof this.args.max === 'number' ? this.args.max : 100;
  }
  get min() {
    return typeof this.args.min === 'number' ? this.args.min : 0;
  }
  get value() {
    return typeof this.args.value === 'number' ? this.args.value : 0;
  }
  static {
    setComponentTemplate(precompileTemplate("\n    <div class={{cn \"velvet-progress\" (concat \"velvet-progress-\" (or @size \"md\")) (concat \"velvet-progress-\" (or @variant \"primary\"))}} aria-valuemax={{this.max}} aria-valuemin={{this.min}} aria-valuenow={{this.value}} aria-valuetext={{@text}} role=\"progressbar\" ...attributes>\n      <div class=\"velvet-progress-line\" style={{this.lineStyle}}></div>\n    </div>\n  ", {
      strictMode: true,
      scope: () => ({
        cn,
        concat,
        or
      })
    }), this);
  }
}

export { VelvetProgress as default };
//# sourceMappingURL=velvet-progress.js.map
