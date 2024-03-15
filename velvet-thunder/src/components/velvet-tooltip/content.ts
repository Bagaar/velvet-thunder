import templateOnlyComponent from '@ember/component/template-only';
import type { ModifierLike } from '@glint/template';
import type { ContentSignature } from '../velvet-dropdown.ts';

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

export default templateOnlyComponent<VelvetTooltipContentSignature>();
