import { concat, hash } from '@ember/helper';
import Component from '@glimmer/component';
import { cn } from '../-private/helpers/cn.ts';
import VelvetIconCircleCheckSolid from './velvet-icon/circle-check-solid.gts';
import VelvetIconCircleExclamationSolid from './velvet-icon/circle-exclamation-solid.gts';
import VelvetIconCircleInfoSolid from './velvet-icon/circle-info-solid.gts';
import VelvetIconXMark from './velvet-icon/x-mark.gts';
import VelvetIconButton from './velvet-icon-button.gts';

export interface VelvetAlertSignature {
  Args: {
    /// Indicate if the alert is hideable.
    /// @default [false]
    isHideable?: boolean;

    /// The level of the alert.
    /// @default [undefined]
    level: 'danger' | 'info' | 'success' | 'warning';

    /// Handle the alert's `hide` event.
    /// @default [undefined]
    onHide?: () => void;
  };
  Blocks: {
    /// The content of the alert.
    content: [];

    /// The icon of the alert.
    icon?: [{ class: 'velvet-alert-icon' }];

    /// The title of the alert.
    title: [];
  };
  Element: HTMLDivElement;
}

const VELVET_ICON_COMPONENT = {
  danger: VelvetIconCircleExclamationSolid,
  info: VelvetIconCircleInfoSolid,
  success: VelvetIconCircleCheckSolid,
  warning: VelvetIconCircleExclamationSolid,
};

export default class VelvetAlert extends Component<VelvetAlertSignature> {
  get isHideable() {
    return typeof this.args.isHideable === 'boolean'
      ? this.args.isHideable
      : Boolean(this.args.onHide);
  }

  get VelvetIconComponent() {
    return VELVET_ICON_COMPONENT[this.args.level];
  }

  <template>
    <div
      class={{cn "velvet-alert" (concat "velvet-alert-" @level)}}
      role="alert"
      ...attributes
    >

      <div class="velvet-alert-header">
        {{#if (has-block "icon")}}
          {{yield (hash class="velvet-alert-icon") to="icon"}}
        {{else}}
          <this.VelvetIconComponent class="velvet-alert-icon" />
        {{/if}}

        <div class="velvet-alert-title">
          {{yield to="title"}}
        </div>

        {{#if this.isHideable}}
          <VelvetIconButton @onClick={{@onHide}} @size="xs" @variant="alert">
            <VelvetIconXMark />
          </VelvetIconButton>
        {{/if}}
      </div>

      <div class="velvet-alert-content">
        {{yield to="content"}}
      </div>
    </div>
  </template>
}
