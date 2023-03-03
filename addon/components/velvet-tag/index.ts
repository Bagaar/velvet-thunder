import templateOnlyComponent from '@ember/component/template-only';

interface VelvetTagSignature {
  Args: {
    /// Indicate if the tag is pill shaped.
    isPill?: boolean;
    /// The size of the tag.
    size?: 'sm' | 'md' | 'lg';
    /// The appearance of the tag.
    variant?: string | 'primary';
  };
  Blocks: {
    default: [];
  };
  Element: HTMLDivElement;
}

export default templateOnlyComponent<VelvetTagSignature>();
