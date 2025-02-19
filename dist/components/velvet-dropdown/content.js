import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

const VelvetDropdownContent = setComponentTemplate(precompileTemplate("\n    {{#if @isShown}}\n      <div class=\"velvet-dropdown-content\" {{@modifier}} ...attributes>\n        {{yield}}\n      </div>\n    {{/if}}\n  ", {
  strictMode: true
}), templateOnly());

export { VelvetDropdownContent as default };
//# sourceMappingURL=content.js.map
