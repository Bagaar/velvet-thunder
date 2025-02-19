import type { TOC } from '@ember/component/template-only';
export interface VelvetTagSignature {
    Args: {
        isPill?: boolean;
        size?: 'sm' | 'md' | 'lg';
        variant?: string | 'primary';
    };
    Blocks: {
        default: [];
    };
    Element: HTMLDivElement;
}
declare const VelvetTag: TOC<VelvetTagSignature>;
export default VelvetTag;
//# sourceMappingURL=velvet-tag.d.ts.map