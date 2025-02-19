import Component from '@glimmer/component';
export interface VelvetSelectOptionSignature {
    Args: {
        value: unknown;
        privateOnCreate: (id: string, value: unknown) => void;
        privateOnDestroy: (id: string) => void;
        privateSelected: unknown;
    };
    Blocks: {
        default: [];
    };
    Element: HTMLOptionElement;
}
export default class VelvetSelectOption extends Component<VelvetSelectOptionSignature> {
    uniqueId: string;
    get isSelected(): boolean;
    constructor(owner: unknown, args: VelvetSelectOptionSignature['Args']);
    willDestroy(): void;
}
//# sourceMappingURL=option.d.ts.map