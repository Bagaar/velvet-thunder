import { action } from '@ember/object';
import Component from '@glimmer/component';

interface VelvetButtonSignature {
  Args: {
    isDisabled?: boolean;
    isDisclosure?: boolean;
    isLoading?: boolean;
    isPill?: boolean;
    isRenderless?: boolean;
    onClick?: (event: MouseEvent) => void;
    size?: 'sm' | 'md' | 'lg';
    type?: 'button' | 'reset' | 'submit';
    variant?: string | 'primary';
  };
  Blocks: {
    default: [{ class: string }];
  };
  Element: HTMLButtonElement;
}

export default class VelvetButton extends Component<VelvetButtonSignature> {
  @action
  clickHandler(event: MouseEvent) {
    const { isDisabled, onClick } = this.args;

    if (typeof onClick !== 'function' || isDisabled === true) {
      return;
    }

    onClick(event);
  }
}
