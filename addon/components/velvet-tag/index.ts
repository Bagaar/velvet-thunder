import templateOnlyComponent from '@ember/component/template-only';

interface VelvetTagComponentSignature {
  Args: {
    isPill?: boolean;
    size?: string;
    variant?: string;
  };
  Blocks: {
    default: [];
  };
  Element: HTMLDivElement;
}

export default templateOnlyComponent<VelvetTagComponentSignature>();
