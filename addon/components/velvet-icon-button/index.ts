import templateOnlyComponent from '@ember/component/template-only';

interface VelvetIconButtonComponentSignature {
  Args: {
    isDisabled?: boolean;
    isDisclosure?: boolean;
    isLoading?: boolean;
    isRenderless?: boolean;
    isRound?: boolean;
    onClick?: (event: MouseEvent) => void;
    size?: string;
    type?: string;
    variant?: string;
  };
  Blocks: {
    default: [{ class: string }];
  };
  Element: HTMLButtonElement;
}

export default templateOnlyComponent<VelvetIconButtonComponentSignature>();
