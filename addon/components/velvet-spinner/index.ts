import templateOnlyComponent from '@ember/component/template-only';

interface VelvetSpinnerSignature {
  Args: {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  };
  Element: SVGElement;
}

export default templateOnlyComponent<VelvetSpinnerSignature>();
