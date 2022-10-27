import templateOnlyComponent from '@ember/component/template-only';

interface VelvetTagComponentSignature {
  Args: {
    isPill?: boolean;
    size?: 'sm' | 'md' | 'lg';
    variant?: string | 'primary';
  };
  Blocks: {
    default: [];
  };
  Element: HTMLDivElement;
}

export default templateOnlyComponent<VelvetTagComponentSignature>();
