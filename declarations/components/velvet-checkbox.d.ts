import Component from '@glimmer/component';
import type { Value as GroupValue, ValueAsArray as GroupValueAsArray, ValueAsObject as GroupValueAsObject } from "./velvet-checkbox-group";
export type Size = 'sm' | 'md' | 'lg';
export interface VelvetCheckboxSignature {
    Args: {
        isChecked?: boolean;
        isDisabled?: boolean;
        isIndeterminate?: boolean;
        name?: string;
        onChange?: (value: boolean, event: Event) => void;
        size?: Size;
        privateGroupValue?: GroupValue;
        privateGroupValueIsObject?: boolean;
        privateInGroup?: boolean;
        privateOnChangeGroup?: (value: GroupValue, event: Event) => void;
    };
    Blocks: {
        default: [];
    };
    Element: HTMLInputElement;
}
export default class VelvetCheckbox extends Component<VelvetCheckboxSignature> {
    get groupValueAsArray(): GroupValueAsArray;
    get groupValueAsObject(): GroupValueAsObject;
    get isCheckedInGroup(): boolean;
    changeHandler: (event: Event) => void;
}
//# sourceMappingURL=velvet-checkbox.d.ts.map