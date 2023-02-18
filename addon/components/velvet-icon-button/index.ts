import templateOnlyComponent from '@ember/component/template-only';

interface VelvetIconButtonSignature {
  Args: {
    isDisabled?: boolean;
    isDisclosure?: boolean;
    isLoading?: boolean;
    isRenderless?: boolean;
    isRound?: boolean;
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

export default templateOnlyComponent<VelvetIconButtonSignature>();
