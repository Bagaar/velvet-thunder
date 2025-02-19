import { hash, concat } from '@ember/helper';
import Component from '@glimmer/component';
import { cn } from '../-private/helpers/cn.js';
import VelvetIconCircleCheckSolid from './velvet-icon/circle-check-solid.js';
import VelvetIconCircleExclamationSolid from './velvet-icon/circle-exclamation-solid.js';
import VelvetIconCircleInfoSolid from './velvet-icon/circle-info-solid.js';
import VelvetIconXMark from './velvet-icon/x-mark.js';
import VelvetIconButton from './velvet-icon-button.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

const VELVET_ICON_COMPONENT = {
  danger: VelvetIconCircleExclamationSolid,
  info: VelvetIconCircleInfoSolid,
  success: VelvetIconCircleCheckSolid,
  warning: VelvetIconCircleExclamationSolid
};
class VelvetAlert extends Component {
  get isHideable() {
    return typeof this.args.isHideable === 'boolean' ? this.args.isHideable : Boolean(this.args.onHide);
  }
  get VelvetIconComponent() {
    return VELVET_ICON_COMPONENT[this.args.level];
  }
  static {
    setComponentTemplate(precompileTemplate("\n    <div class={{cn \"velvet-alert\" (concat \"velvet-alert-\" @level)}} role=\"alert\" ...attributes>\n\n      <div class=\"velvet-alert-header\">\n        {{#if (has-block \"icon\")}}\n          {{yield (hash class=\"velvet-alert-icon\") to=\"icon\"}}\n        {{else}}\n          <this.VelvetIconComponent class=\"velvet-alert-icon\" />\n        {{/if}}\n\n        <div class=\"velvet-alert-title\">\n          {{yield to=\"title\"}}\n        </div>\n\n        {{#if this.isHideable}}\n          <VelvetIconButton @onClick={{@onHide}} @size=\"xs\" @variant=\"alert\">\n            <VelvetIconXMark />\n          </VelvetIconButton>\n        {{/if}}\n      </div>\n\n      <div class=\"velvet-alert-content\">\n        {{yield to=\"content\"}}\n      </div>\n    </div>\n  ", {
      strictMode: true,
      scope: () => ({
        cn,
        concat,
        hash,
        VelvetIconButton,
        VelvetIconXMark
      })
    }), this);
  }
}

export { VelvetAlert as default };
//# sourceMappingURL=velvet-alert.js.map
