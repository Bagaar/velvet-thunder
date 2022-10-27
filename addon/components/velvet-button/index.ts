import templateOnlyComponent from '@ember/component/template-only';

interface VelvetButtonComponentSignature {
  Args: {
    isDisabled?: boolean;
    isDisclosure?: boolean;
    isLoading?: boolean;
    isPill?: boolean;
    isRenderless?: boolean;
    onClick?: (event: MouseEvent) => void;
    size?: 'sm' | 'md' | 'lg';
    type?: 'button' | 'reset' | 'submit';
    variant?: string | 'primary';
  };
  Blocks: {
    default: [{ class: string }];
  };
  Element: HTMLButtonElement;
}

export default templateOnlyComponent<VelvetButtonComponentSignature>();
