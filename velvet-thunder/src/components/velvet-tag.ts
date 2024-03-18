import templateOnlyComponent from '@ember/component/template-only';

export interface VelvetTagSignature {
  Args: {
    /// Indicate if the tag is pill shaped.
    /// @default [false]
    isPill?: boolean;
    /// The size of the tag.
    /// @default ["md"]
    size?: 'sm' | 'md' | 'lg';
    /// The appearance of the tag.
    /// @default ["primary"]
    variant?: string | 'primary';
  };
  Blocks: {
    /// The label of the tag.
    default: [];
  };
  Element: HTMLDivElement;
}

export default templateOnlyComponent<VelvetTagSignature>();
