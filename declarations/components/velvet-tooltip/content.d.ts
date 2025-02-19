import type { TOC } from '@ember/component/template-only';
import type { ModifierLike } from '@glint/template';
import type { ContentSignature } from "../velvet-dropdown";
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
declare const VelvetTooltipContent: TOC<VelvetTooltipContentSignature>;
export default VelvetTooltipContent;
//# sourceMappingURL=content.d.ts.map