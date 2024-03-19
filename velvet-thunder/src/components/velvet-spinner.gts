import type { TOC } from '@ember/component/template-only';
import { concat } from '@ember/helper';
import { or } from 'ember-truth-helpers';
import { cn } from '../-private/helpers/cn.ts';

export interface VelvetSpinnerSignature {
  Args: {
    /// The size of the spinner.
    /// @default ["md"]
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  };
  Element: SVGElement;
}

const VelvetSpinner: TOC<VelvetSpinnerSignature> = <template>
  <svg
    class={{cn
      "velvet-spinner"
      (concat "velvet-spinner-" (or @size "md"))
    }}
    fill="none"
    role="status"
    stroke="currentColor"
    stroke-width="10"
    viewBox="0 0 80 80"
    xmlns="http://www.w3.org/2000/svg"
    ...attributes
  >
    <circle class="velvet-spinner-track" cx="40" cy="40" r="35"></circle>
    <circle
      class="velvet-spinner-line"
      cx="40"
      cy="40"
      r="35"
      stroke-dasharray="40, 160"
      stroke-linecap="round"
    ></circle>
  </svg>
</template>;

export default VelvetSpinner;
