import Component from '@glimmer/component';
import { type Link, type LinkManagerService } from 'ember-link';
export interface VelvetIconLinkSignature {
    Args: {
        isRound?: boolean;
        size?: 'xs' | 'sm' | 'md' | 'lg';
        to: string | Link;
        variant?: string | 'primary';
    };
    Blocks: {
        default: [];
    };
    Element: HTMLAnchorElement;
}
export default class VelvetIconLink extends Component<VelvetIconLinkSignature> {
    linkManagerService: LinkManagerService;
    get link(): Link;
}
//# sourceMappingURL=velvet-icon-link.d.ts.map