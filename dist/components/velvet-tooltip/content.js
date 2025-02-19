import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

const VelvetTooltipContent = setComponentTemplate(precompileTemplate("\n  {{#if @isShown}}\n    <div class=\"velvet-tooltip-content\" {{@modifier}} ...attributes>\n      {{yield}}\n    </div>\n  {{/if}}\n", {
  strictMode: true
}), templateOnly());

export { VelvetTooltipContent as default };
//# sourceMappingURL=content.js.map
