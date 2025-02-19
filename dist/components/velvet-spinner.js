import { concat } from '@ember/helper';
import { or } from 'ember-truth-helpers';
import { cn } from '../-private/helpers/cn.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

const VelvetSpinner = setComponentTemplate(precompileTemplate("\n  <svg class={{cn \"velvet-spinner\" (concat \"velvet-spinner-\" (or @size \"md\"))}} fill=\"none\" role=\"status\" stroke=\"currentColor\" stroke-width=\"10\" viewBox=\"0 0 80 80\" xmlns=\"http://www.w3.org/2000/svg\" ...attributes>\n    <circle class=\"velvet-spinner-track\" cx=\"40\" cy=\"40\" r=\"35\"></circle>\n    <circle class=\"velvet-spinner-line\" cx=\"40\" cy=\"40\" r=\"35\" stroke-dasharray=\"40, 160\" stroke-linecap=\"round\"></circle>\n  </svg>\n", {
  strictMode: true,
  scope: () => ({
    cn,
    concat,
    or
  })
}), templateOnly());

export { VelvetSpinner as default };
//# sourceMappingURL=velvet-spinner.js.map
