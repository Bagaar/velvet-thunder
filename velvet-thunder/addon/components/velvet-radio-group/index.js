import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';

export default class VelvetRadioGroupComponent extends Component {
  uniqueName = guidFor(this);
}
