import Component from '@glimmer/component';

interface VelvetAvatarComponentSignature {
  Args: {
    name: string;
  };
}

export default class VelvetAvatarComponent extends Component<VelvetAvatarComponentSignature> {
  get initials() {
    return this.args.name
      .split(' ')
      .slice(0, 2)
      .map((name) => name.charAt(0))
      .join('');
  }
}
