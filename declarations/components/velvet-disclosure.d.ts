import Component from '@glimmer/component';
import type { WithBoundArgs } from '@glint/template';
import VelvetButton from "./velvet-button";
import VelvetIconButton from "./velvet-icon-button";
export interface VelvetDisclosureSignature {
    Args: {
        shouldAnimate?: boolean;
    };
    Blocks: {
        content: [publicAPI: PublicAPI];
        trigger: [
            publicAPI: PublicAPI & {
                Button: WithBoundArgs<typeof VelvetButton, 'isDisclosure' | 'isExpanded' | 'onClick'>;
                IconButton: WithBoundArgs<typeof VelvetIconButton, 'onClick'>;
            }
        ];
    };
    Element: HTMLDivElement;
}
interface PublicAPI {
    hide: () => void;
    isShown: boolean;
    show: () => void;
    toggle: () => void;
}
export default class VelvetDisclosure extends Component<VelvetDisclosureSignature> {
    isShown: boolean;
    get shouldAnimate(): boolean;
    hide: () => void;
    show: () => void;
    toggle: () => void;
}
export {};
//# sourceMappingURL=velvet-disclosure.d.ts.map