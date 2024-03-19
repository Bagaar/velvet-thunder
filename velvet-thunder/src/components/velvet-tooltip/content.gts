import type { TOC } from '@ember/component/template-only';
import type { ModifierLike } from '@glint/template';
import type { ContentSignature } from '../velvet-dropdown.gts';

export interface VelvetTooltipContentSignature {
  Args: {
    isShown: boolean;
    modifier: ModifierLike<ContentSignature>;
  };
  Blocks: {
    default: [];
  };
  Element: HTMLDivElement;
}

const VelvetTooltipContent: TOC<VelvetTooltipContentSignature> = <template>
  {{#if @isShown}}
    <div class="velvet-tooltip-content" {{@modifier}} ...attributes>
      {{yield}}
    </div>
  {{/if}}
</template>;

export default VelvetTooltipContent;
