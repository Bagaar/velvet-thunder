import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

const VelvetIconCircleCheckSolid = setComponentTemplate(precompileTemplate("\n  <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"16\" width=\"16\" viewBox=\"0 0 512 512\" ...attributes>\n    <path d=\"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z\" fill=\"currentColor\" />\n  </svg>\n", {
  strictMode: true
}), templateOnly());

export { VelvetIconCircleCheckSolid as default };
//# sourceMappingURL=circle-check-solid.js.map
