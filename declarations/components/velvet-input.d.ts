import Component from '@glimmer/component';
export interface VelvetInputSignature {
    Args: {
        isDisabled?: boolean;
        isInvalid?: boolean;
        isPill?: boolean;
        onChange?: (value: string, event: Event) => void;
        onInput?: (value: string, event: Event) => void;
        placeholder?: string;
        size?: 'sm' | 'md' | 'lg';
        type?: string;
        value?: string;
        variant?: string | 'primary';
    };
    Element: HTMLInputElement;
}
export default class VelvetInput extends Component<VelvetInputSignature> {
    changeHandler: (event: Event) => void;
    inputHandler: (event: Event) => void;
}
//# sourceMappingURL=velvet-input.d.ts.map