import Component from '@glimmer/component';
export type Size = 'sm' | 'md' | 'lg';
export interface VelvetRadioSignature {
    Args: {
        isChecked?: boolean;
        isDisabled?: boolean;
        name?: string;
        onChange?: (isChecked: boolean, event: Event) => void;
        size?: Size;
        value?: unknown;
        privateGroupValue?: unknown;
        privateInGroup?: boolean;
        privateOnChangeGroup?: (value: unknown, event: Event) => void;
    };
    Blocks: {
        default: [];
    };
    Element: HTMLInputElement;
}
export default class VelvetRadio extends Component<VelvetRadioSignature> {
    get isChecked(): boolean | undefined;
    get valueAttr(): string | undefined;
    changeHandler: (event: Event) => void;
}
//# sourceMappingURL=velvet-radio.d.ts.map