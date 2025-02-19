import Component from '@glimmer/component';
export interface VelvetAlertSignature {
    Args: {
        isHideable?: boolean;
        level: 'danger' | 'info' | 'success' | 'warning';
        onHide?: () => void;
    };
    Blocks: {
        content: [];
        icon?: [{
            class: 'velvet-alert-icon';
        }];
        title: [];
    };
    Element: HTMLDivElement;
}
export default class VelvetAlert extends Component<VelvetAlertSignature> {
    get isHideable(): boolean;
    get VelvetIconComponent(): import("@ember/component/template-only").TOC<import("./velvet-icon/circle-check-solid").VelvetIconCircleCheckSolidSignature> | import("@ember/component/template-only").TOC<import("./velvet-icon/circle-exclamation-solid").VelvetIconCircleExclamationSolidSignature> | import("@ember/component/template-only").TOC<import("./velvet-icon/circle-info-solid").VelvetIconCircleInfoSolidSignature>;
}
//# sourceMappingURL=velvet-alert.d.ts.map