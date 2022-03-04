import Component from '@glimmer/component';

export default class VelvetAvatarComponent extends Component {
  get initials() {
    return this.args.name
      .split(' ')
      .slice(0, 2)
      .map((name) => name.charAt(0))
      .join('');
  }
}
