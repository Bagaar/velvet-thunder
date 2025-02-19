import { concat } from '@ember/helper';
import { or } from 'ember-truth-helpers';
import { cn } from '../-private/helpers/cn.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

const VelvetTag = setComponentTemplate(precompileTemplate("\n  <div class={{cn \"velvet-tag\" (concat \"velvet-tag-\" (or @size \"md\")) (concat \"velvet-tag-\" (or @variant \"primary\")) (if @isPill \"velvet-tag-pill\")}} ...attributes>\n    {{yield}}\n  </div>\n", {
  strictMode: true,
  scope: () => ({
    cn,
    concat,
    or
  })
}), templateOnly());

export { VelvetTag as default };
//# sourceMappingURL=velvet-tag.js.map
