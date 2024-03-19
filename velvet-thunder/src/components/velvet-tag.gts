import type { TOC } from '@ember/component/template-only';
import { concat } from '@ember/helper';
import { or } from 'ember-truth-helpers';
import { cn } from '../-private/helpers/cn.ts';

export interface VelvetTagSignature {
  Args: {
    /// Indicate if the tag is pill shaped.
    /// @default [false]
    isPill?: boolean;

    /// The size of the tag.
    /// @default ["md"]
    size?: 'sm' | 'md' | 'lg';

    /// The appearance of the tag.
    /// @default ["primary"]
    variant?: string | 'primary';
  };
  Blocks: {
    /// The label of the tag.
    default: [];
  };
  Element: HTMLDivElement;
}

const VelvetTag: TOC<VelvetTagSignature> = <template>
  <div
    class={{cn
      "velvet-tag"
      (concat "velvet-tag-" (or @size "md"))
      (concat "velvet-tag-" (or @variant "primary"))
      (if @isPill "velvet-tag-pill")
    }}
    ...attributes
  >
    {{yield}}
  </div>
</template>;

export default VelvetTag;
