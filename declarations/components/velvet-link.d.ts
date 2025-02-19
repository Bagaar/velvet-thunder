import Component from '@glimmer/component';
import { type Link, type LinkManagerService } from 'ember-link';
export interface VelvetLinkSignature {
    Args: {
        isPill?: boolean;
        size?: 'xs' | 'sm' | 'md' | 'lg';
        to: string | Link;
        variant?: string | 'primary';
    };
    Blocks: {
        default: [];
    };
    Element: HTMLAnchorElement;
}
export default class VelvetLink extends Component<VelvetLinkSignature> {
    linkManagerService: LinkManagerService;
    get link(): Link;
}
//# sourceMappingURL=velvet-link.d.ts.map