import Component from '@glimmer/component';

interface VelvetAvatarComponentSignature {
  Args: {
    color?: string;
    initials?: string;
    isRounded?: boolean;
    name?: string;
    size?: string;
    src?: string;
  };
  Element: HTMLDivElement;
}

export default class VelvetAvatarComponent extends Component<VelvetAvatarComponentSignature> {
  get initials() {
    return (this.args.name || '')
      .split(' ')
      .slice(0, 2)
      .map((name) => name.charAt(0))
      .join('');
  }
}
