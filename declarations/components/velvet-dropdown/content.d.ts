import type { TOC } from '@ember/component/template-only';
import type { ModifierLike } from '@glint/template';
import type { ContentSignature } from "../velvet-dropdown";
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
declare const VelvetDropdownContent: TOC<VelvetDropdownContentSignature>;
export default VelvetDropdownContent;
//# sourceMappingURL=content.d.ts.map