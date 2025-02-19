import { type Placement, type Strategy } from '@floating-ui/dom';
import Component from '@glimmer/component';
import type { ModifierLike, WithBoundArgs } from '@glint/template';
import VelvetButton from "./velvet-button";
import VelvetDropdownContent from "./velvet-dropdown/content";
import VelvetIconButton from "./velvet-icon-button";
export interface VelvetDropdownSignature {
    Args: {
        offset?: number;
        placement?: Placement;
        strategy?: Strategy;
    };
    Blocks: {
        default: [
            {
                Button: WithBoundArgs<typeof VelvetButton, 'privateDropdownTrigger' | 'isDisclosure' | 'variant'>;
                Content: WithBoundArgs<typeof VelvetDropdownContent, 'isShown' | 'modifier'>;
                IconButton: WithBoundArgs<typeof VelvetIconButton, 'privateDropdownTrigger' | 'variant'>;
                isShown: boolean;
                hide: () => void;
                show: () => void;
                toggle: () => void;
                content: ModifierLike<ContentSignature>;
                trigger: ModifierLike<TriggerSignature>;
            }
        ];
    };
    Element: HTMLDivElement;
}
export interface ContentSignature {
    Element: HTMLElement;
}
export interface TriggerSignature {
    Element: HTMLElement;
}
export default class VelvetDropdown extends Component<VelvetDropdownSignature> {
    isShown: boolean;
    triggerElement: HTMLElement | null;
    get offset(): number;
    get placement(): Placement;
    get strategy(): Strategy;
    content: import("ember-modifier").FunctionBasedModifier<{
        Element: HTMLElement;
        Args: {
            Named: import("ember-modifier/-private/signature").EmptyObject;
            Positional: [];
        };
    }>;
    trigger: import("ember-modifier").FunctionBasedModifier<{
        Element: HTMLElement;
        Args: {
            Named: import("ember-modifier/-private/signature").EmptyObject;
            Positional: [];
        };
    }>;
    hide: () => void;
    show: () => void;
    toggle: () => void;
}
//# sourceMappingURL=velvet-dropdown.d.ts.map