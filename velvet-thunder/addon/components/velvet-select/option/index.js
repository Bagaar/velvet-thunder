import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';

export default class VelvetSelectOptionComponent extends Component {
  uniqueId = guidFor(this);

  constructor() {
    super(...arguments);

    this.args.onRegister(this.uniqueId, this.args.value);
  }
}
