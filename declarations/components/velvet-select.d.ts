import Component from '@glimmer/component';
import type { WithBoundArgs } from '@glint/template';
import VelvetSelectOption from "./velvet-select/option";
export interface VelvetSelectSignature {
    Args: {
        isDisabled?: boolean;
        isInvalid?: boolean;
        isPill?: boolean;
        onChange?: (selected: unknown, event: Event) => void;
        placeholder?: string;
        selected?: unknown;
        size?: 'sm' | 'md' | 'lg';
        variant?: string | 'primary';
    };
    Blocks: {
        default: [
            {
                Option: WithBoundArgs<typeof VelvetSelectOption, 'privateOnCreate' | 'privateOnDestroy' | 'privateSelected'>;
            }
        ];
    };
    Element: HTMLSelectElement;
}
export default class VelvetSelect extends Component<VelvetSelectSignature> {
    options: Map<any, any>;
    get hasSelection(): boolean;
    get shouldRenderPlaceholder(): boolean;
    changeHandler: (event: Event) => void;
    addOption: (id: string, value: unknown) => void;
    removeOption: (id: string) => void;
}
//# sourceMappingURL=velvet-select.d.ts.map