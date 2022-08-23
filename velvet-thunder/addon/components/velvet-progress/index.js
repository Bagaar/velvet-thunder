import { htmlSafe } from '@ember/template';
import Component from '@glimmer/component';

export default class VelvetProgressComponent extends Component {
  defaultMax = 100;
  defaultMin = 0;
  defaultValue = 0;

  get hasMax() {
    return typeof this.args.max === 'number';
  }

  get hasMin() {
    return typeof this.args.min === 'number';
  }

  get hasValue() {
    return typeof this.args.value === 'number';
  }

  get lineStyle() {
    const max = this.hasMax ? this.args.max : this.defaultMax;
    const min = this.hasMin ? this.args.min : this.defaultMin;
    const value = this.hasValue ? this.args.value : this.defaultValue;
    const progress = Math.floor(((value - min) / (max - min)) * 100);
    const progressClipped = Math.max(0, Math.min(100, progress));

    return htmlSafe(`width: ${progressClipped}%;`);
  }
}
