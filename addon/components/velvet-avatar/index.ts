import Component from '@glimmer/component';

interface VelvetAvatarSignature {
  Args: {
    initials?: string;
    isRound?: boolean;
    name?: string;
    size?: 'sm' | 'md' | 'lg';
    src?: string;
    variant?: string | 'primary';
  };
  Element: HTMLDivElement;
}

export default class VelvetAvatar extends Component<VelvetAvatarSignature> {
  get initials() {
    return (this.args.name || '')
      .split(' ')
      .slice(0, 2)
      .map((name) => name.charAt(0))
      .join('');
  }
}
