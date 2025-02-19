import Component from '@glimmer/component';
import type { WithBoundArgs } from '@glint/template';
import VelvetCheckbox from "./velvet-checkbox";
import type { Size } from "./velvet-checkbox";
export type ValueAsArray = string[];
export type ValueAsObject = {
    [name: string]: boolean;
};
export type Value = ValueAsArray | ValueAsObject;
export interface VelvetCheckboxGroupSignature {
    Args: {
        isDisabled?: boolean;
        onChange?: (value: Value, event: Event) => void;
        size?: Size;
        value?: Value;
        valueIsObject?: boolean;
    };
    Blocks: {
        default: [
            {
                Checkbox: WithBoundArgs<typeof VelvetCheckbox, 'isDisabled' | 'size' | 'privateGroupValue' | 'privateGroupValueIsObject' | 'privateInGroup' | 'privateOnChangeGroup'>;
            }
        ];
    };
    Element: HTMLDivElement;
}
export default class VelvetCheckboxGroup extends Component<VelvetCheckboxGroupSignature> {
    uniqueName: string;
}
//# sourceMappingURL=velvet-checkbox-group.d.ts.map