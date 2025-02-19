import Component from '@glimmer/component';
export interface VelvetSwitchSignature {
    Args: {
        alignment?: 'left' | 'right';
        isChecked?: boolean;
        isDisabled?: boolean;
        onChange?: (isChecked: boolean, event: Event) => void;
        size?: 'sm' | 'md' | 'lg';
    };
    Blocks: {
        default: [];
    };
    Element: HTMLInputElement;
}
export default class VelvetSwitch extends Component<VelvetSwitchSignature> {
    changeHandler: (event: Event) => void;
}
//# sourceMappingURL=velvet-switch.d.ts.map