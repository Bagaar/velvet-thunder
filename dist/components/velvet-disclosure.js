import { hash } from '@ember/helper';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import velvetAutoAnimate from '../modifiers/velvet-auto-animate.js';
import VelvetButton from './velvet-button.js';
import VelvetIconButton from './velvet-icon-button.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import { g, i } from 'decorator-transforms/runtime';

class VelvetDisclosure extends Component {
  static {
    g(this.prototype, "isShown", [tracked], function () {
      return false;
    });
  }
  #isShown = (i(this, "isShown"), void 0);
  get shouldAnimate() {
    return typeof this.args.shouldAnimate === 'boolean' ? this.args.shouldAnimate : true;
  }
  hide = () => {
    this.isShown = false;
  };
  show = () => {
    this.isShown = true;
  };
  toggle = () => {
    if (this.isShown) {
      this.hide();
    } else {
      this.show();
    }
  };
  static {
    setComponentTemplate(precompileTemplate("\n    <div class=\"velvet-disclosure\" {{(if this.shouldAnimate velvetAutoAnimate)}} ...attributes>\n      {{yield (hash Button=(component VelvetButton isDisclosure=true isExpanded=this.isShown onClick=this.toggle) IconButton=(component VelvetIconButton isDisclosure=true isExpanded=this.isShown onClick=this.toggle) isShown=this.isShown hide=this.hide show=this.show toggle=this.toggle) to=\"trigger\"}}\n\n      {{#if this.isShown}}\n        {{yield (hash isShown=this.isShown hide=this.hide show=this.show toggle=this.toggle) to=\"content\"}}\n      {{/if}}\n    </div>\n  ", {
      strictMode: true,
      scope: () => ({
        velvetAutoAnimate,
        hash,
        VelvetButton,
        VelvetIconButton
      })
    }), this);
  }
}

export { VelvetDisclosure as default };
//# sourceMappingURL=velvet-disclosure.js.map
