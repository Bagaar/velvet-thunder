import templateOnlyComponent from '@ember/component/template-only';

interface VelvetSpinnerComponentSignature {
  Args: {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  };
  Element: SVGElement;
}

export default templateOnlyComponent<VelvetSpinnerComponentSignature>();
