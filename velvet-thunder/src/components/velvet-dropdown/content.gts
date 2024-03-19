import type { TOC } from '@ember/component/template-only';
import type { ModifierLike } from '@glint/template';
import type { ContentSignature } from '../velvet-dropdown.gts';

export interface VelvetDropdownContentSignature {
  Args: {
    isShown: boolean;
    modifier: ModifierLike<ContentSignature>;
  };
  Blocks: {
    default: [];
  };
  Element: HTMLDivElement;
}

const VelvetDropdownContent: TOC<VelvetDropdownContentSignature> = <template>
    {{#if @isShown}}
      <div class="velvet-dropdown-content" {{@modifier}} ...attributes>
        {{yield}}
      </div>
    {{/if}}
  </template>;

export default VelvetDropdownContent;
