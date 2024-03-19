import { hash } from '@ember/helper';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import type { WithBoundArgs } from '@glint/template';
import velvetAutoAnimate from '../modifiers/velvet-auto-animate.ts';
import VelvetButton from './velvet-button.gts';
import VelvetIconButton from './velvet-icon-button.gts';

export interface VelvetDisclosureSignature {
  Args: {
    /// Indicate if the disclosed content should animate.
    /// @default [true]
    shouldAnimate?: boolean;
  };
  Blocks: {
    /// The content of the disclosure.
    content: [publicAPI: PublicAPI];

    /// The trigger of the disclosure.
    trigger: [
      publicAPI: PublicAPI & {
        Button: WithBoundArgs<
          typeof VelvetButton,
          'isDisclosure' | 'isExpanded' | 'onClick'
        >;
        IconButton: WithBoundArgs<typeof VelvetIconButton, 'onClick'>;
      },
    ];
  };
  Element: HTMLDivElement;
}

interface PublicAPI {
  hide: () => void;
  isShown: boolean;
  show: () => void;
  toggle: () => void;
}

export default class VelvetDisclosure extends Component<VelvetDisclosureSignature> {
  @tracked isShown = false;

  get shouldAnimate() {
    return typeof this.args.shouldAnimate === 'boolean'
      ? this.args.shouldAnimate
      : true;
  }

  hide = () => {
    this.isShown = false;
  };

  show = () => {
    this.isShown = true;
  };

  toggle = () => {
    if (this.isShown) {
      this.hide();
    } else {
      this.show();
    }
  };

  <template>
    <div
      class="velvet-disclosure"
      {{(if this.shouldAnimate velvetAutoAnimate)}}
      ...attributes
    >
      {{yield
        (hash
          Button=(component
            VelvetButton
            isDisclosure=true
            isExpanded=this.isShown
            onClick=this.toggle
          )
          IconButton=(component
            VelvetIconButton
            isDisclosure=true
            isExpanded=this.isShown
            onClick=this.toggle
          )
          isShown=this.isShown
          hide=this.hide
          show=this.show
          toggle=this.toggle
        )
        to="trigger"
      }}

      {{#if this.isShown}}
        {{yield
          (hash
            isShown=this.isShown hide=this.hide show=this.show toggle=this.toggle
          )
          to="content"
        }}
      {{/if}}
    </div>
  </template>
}
