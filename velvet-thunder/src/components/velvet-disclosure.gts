import { hash } from '@ember/helper';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { and } from 'ember-truth-helpers';
import type { WithBoundArgs } from '@glint/template';
import velvetAutoAnimate from '../modifiers/velvet-auto-animate.ts';
import VelvetButton from './velvet-button.gts';
import VelvetIconButton from './velvet-icon-button.gts';

export interface VelvetDisclosureSignature {
  Args: {
    /// Indicate if the disclosed content should animate.
    /// @default [true]
    shouldAnimate?: boolean;
    /// Indicate wether the trigger should be hidden when the content is opened.
    /// @default [false]
    hideTriggerWhenOpened?: boolean;
  };
  Blocks: {
    /// The content of the disclosure.
    content: [
      publicAPI: PublicAPI & {
        Button: WithBoundArgs<
          typeof VelvetButton,
          'isDisclosure' | 'isExpanded' | 'onClick'
        >;
        IconButton: WithBoundArgs<typeof VelvetIconButton, 'onClick'>;
      },
    ];

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

  get hideTriggerWhenOpened() {
    return typeof this.args.hideTriggerWhenOpened === 'boolean'
      ? this.args.hideTriggerWhenOpened
      : false;
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
      class='velvet-disclosure'
      {{(if this.shouldAnimate velvetAutoAnimate)}}
      ...attributes
    >
      {{#unless (and this.hideTriggerWhenOpened this.isShown)}}
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
          to='trigger'
        }}
      {{/unless}}

      {{#if this.isShown}}
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
          to='content'
        }}
      {{/if}}
    </div>
  </template>
}
