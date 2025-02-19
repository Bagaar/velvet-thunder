import Component from '@glimmer/component';
import type { WithBoundArgs } from '@glint/template';
import VelvetRadio from "./velvet-radio";
import type { Size } from "./velvet-radio";
export interface VelvetRadioGroupSignature {
    Args: {
        isDisabled?: boolean;
        name?: string;
        onChange?: (value: unknown, event: Event) => void;
        size?: Size;
        value?: unknown;
    };
    Blocks: {
        default: [
            {
                Radio: WithBoundArgs<typeof VelvetRadio, 'isDisabled' | 'name' | 'size' | 'privateGroupValue' | 'privateInGroup' | 'privateOnChangeGroup'>;
            }
        ];
    };
    Element: HTMLDivElement;
}
export default class VelvetRadioGroup extends Component<VelvetRadioGroupSignature> {
    uniqueName: string;
}
//# sourceMappingURL=velvet-radio-group.d.ts.map