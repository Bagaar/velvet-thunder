import { htmlSafe } from '@ember/template';
import Component from '@glimmer/component';

interface VelvetProgressComponentSignature {
  Args: {
    color?: string | 'primary'; // TODO: Remove.
    max?: number;
    min?: number;
    size?: 'sm' | 'md' | 'lg';
    text?: string;
    value?: number;
  };
  Element: HTMLDivElement;
}

export default class VelvetProgressComponent extends Component<VelvetProgressComponentSignature> {
  get lineStyle() {
    const { max, min, value } = this;
    const progress = Math.floor(((value - min) / (max - min)) * 100);
    const progressClipped = Math.max(0, Math.min(100, progress));

    return htmlSafe(`width: ${progressClipped}%;`);
  }

  get max() {
    return typeof this.args.max === 'number' ? this.args.max : 100;
  }

  get min() {
    return typeof this.args.min === 'number' ? this.args.min : 0;
  }

  get value() {
    return typeof this.args.value === 'number' ? this.args.value : 0;
  }
}
