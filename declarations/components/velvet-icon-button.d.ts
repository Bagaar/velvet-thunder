import Component from '@glimmer/component';
import type { ModifierLike } from '@glint/template';
import type { TriggerSignature } from "./velvet-dropdown";
export interface VelvetIconButtonSignature {
    Args: {
        isDisabled?: boolean;
        isDisclosure?: boolean;
        isExpanded?: boolean;
        isLoading?: boolean;
        isRenderless?: boolean;
        isRound?: boolean;
        onClick?: (event: MouseEvent) => void;
        size?: 'xs' | 'sm' | 'md' | 'lg';
        type?: 'button' | 'reset' | 'submit';
        variant?: string | 'primary';
        privateDropdownTrigger?: ModifierLike<TriggerSignature>;
    };
    Blocks: {
        default: [{
            class: string;
        }];
    };
    Element: HTMLButtonElement;
}
export default class VelvetIconButton extends Component<VelvetIconButtonSignature> {
    clickHandler: (event: MouseEvent) => void;
}
//# sourceMappingURL=velvet-icon-button.d.ts.map