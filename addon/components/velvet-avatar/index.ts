import Component from '@glimmer/component';

interface VelvetAvatarSignature {
  Args: {
    /// The initials of the user.
    initials?: string;
    /// Indicate if the avatar is round.
    isRound?: boolean;
    /// The name of the user.
    name?: string;
    /// The size of the avatar.
    size?: 'sm' | 'md' | 'lg';
    /// The source of the image.
    src?: string;
    /// The appearance of the avatar.
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
