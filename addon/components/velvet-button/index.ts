import templateOnlyComponent from '@ember/component/template-only';

interface VelvetButtonComponentSignature {
  Args: {
    isDisabled?: boolean;
    isDisclosure?: boolean;
    isLoading?: boolean;
    isPill?: boolean;
    isRenderless?: boolean;
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

export default templateOnlyComponent<VelvetButtonComponentSignature>();
