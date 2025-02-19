import Component from '@glimmer/component';
export interface VelvetProgressSignature {
    Args: {
        max?: number;
        min?: number;
        size?: 'sm' | 'md' | 'lg';
        text?: string;
        value?: number;
        variant?: string | 'primary';
    };
    Element: HTMLDivElement;
}
export default class VelvetProgress extends Component<VelvetProgressSignature> {
    get lineStyle(): import("@ember/template").SafeString;
    get max(): number;
    get min(): number;
    get value(): number;
}
//# sourceMappingURL=velvet-progress.d.ts.map