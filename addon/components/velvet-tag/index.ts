import templateOnlyComponent from '@ember/component/template-only';

interface VelvetTagSignature {
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

export default templateOnlyComponent<VelvetTagSignature>();
