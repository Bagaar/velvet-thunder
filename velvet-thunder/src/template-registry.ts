// components
import type VelvetAlert from './components/velvet-alert.gts';
import type VelvetAvatar from './components/velvet-avatar.gts';
import type VelvetButton from './components/velvet-button.gts';
import type VelvetCheckboxGroup from './components/velvet-checkbox-group.gts';
import type VelvetCheckbox from './components/velvet-checkbox.gts';
import type VelvetDisclosure from './components/velvet-disclosure.gts';
import type VelvetDropdown from './components/velvet-dropdown.gts';
import type VelvetDropdownContent from './components/velvet-dropdown/content.gts';
import type VelvetIconButton from './components/velvet-icon-button.gts';
import type VelvetIconLink from './components/velvet-icon-link.gts';
import type VelvetIconChevronDown from './components/velvet-icon/chevron-down.gts';
import type VelvetIconCircleCheckSolid from './components/velvet-icon/circle-check-solid.gts';
import type VelvetIconCircleExclamationSolid from './components/velvet-icon/circle-exclamation-solid.gts';
import type VelvetIconCircleInfoSolid from './components/velvet-icon/circle-info-solid.gts';
import type VelvetIconUser from './components/velvet-icon/user.gts';
import type VelvetIconXMark from './components/velvet-icon/x-mark.gts';
import type VelvetInput from './components/velvet-input.gts';
import type VelvetLink from './components/velvet-link.gts';
import type VelvetProgress from './components/velvet-progress.gts';
import type VelvetRadioGroup from './components/velvet-radio-group.gts';
import type VelvetRadio from './components/velvet-radio.gts';
import type VelvetSelect from './components/velvet-select.gts';
import type VelvetSelectOption from './components/velvet-select/option.gts';
import type VelvetSpinner from './components/velvet-spinner.gts';
import type VelvetSwitch from './components/velvet-switch.gts';
import type VelvetTag from './components/velvet-tag.gts';
import type VelvetTextarea from './components/velvet-textarea.gts';
import type VelvetTooltip from './components/velvet-tooltip.gts';
import type VelvetTooltipContent from './components/velvet-tooltip/content.gts';

// modifiers
import type VelvetAutoAnimate from './modifiers/velvet-auto-animate.ts';

export default interface VelvetThunderRegistry {
  // components
  'velvet-alert': typeof VelvetAlert;
  VelvetAlert: typeof VelvetAlert;
  'velvet-avatar': typeof VelvetAvatar;
  VelvetAvatar: typeof VelvetAvatar;
  'velvet-button': typeof VelvetButton;
  VelvetButton: typeof VelvetButton;
  'velvet-checkbox-group': typeof VelvetCheckboxGroup;
  VelvetCheckboxGroup: typeof VelvetCheckboxGroup;
  'velvet-checkbox': typeof VelvetCheckbox;
  VelvetCheckbox: typeof VelvetCheckbox;
  'velvet-disclosure': typeof VelvetDisclosure;
  VelvetDisclosure: typeof VelvetDisclosure;
  'velvet-dropdown': typeof VelvetDropdown;
  VelvetDropdown: typeof VelvetDropdown;
  'velvet-dropdown/content': typeof VelvetDropdownContent;
  'VelvetDropdown::Content': typeof VelvetDropdownContent;
  'velvet-icon-button': typeof VelvetIconButton;
  VelvetIconButton: typeof VelvetIconButton;
  'velvet-icon-link': typeof VelvetIconLink;
  VelvetIconLink: typeof VelvetIconLink;
  'velvet-icon/chevron-down': typeof VelvetIconChevronDown;
  'VelvetIcon::ChevronDown': typeof VelvetIconChevronDown;
  'velvet-icon/circle-check-solid': typeof VelvetIconCircleCheckSolid;
  'VelvetIcon::CircleCheckSolid': typeof VelvetIconCircleCheckSolid;
  'velvet-icon/circle-exclamation-solid': typeof VelvetIconCircleExclamationSolid;
  'VelvetIcon::CircleExclamationSolid': typeof VelvetIconCircleExclamationSolid;
  'velvet-icon/circle-info-solid': typeof VelvetIconCircleInfoSolid;
  'VelvetIcon::CircleInfoSolid': typeof VelvetIconCircleInfoSolid;
  'velvet-icon/user': typeof VelvetIconUser;
  'VelvetIcon::User': typeof VelvetIconUser;
  'velvet-icon/x-mark': typeof VelvetIconXMark;
  'VelvetIcon::XMark': typeof VelvetIconXMark;
  'velvet-input': typeof VelvetInput;
  VelvetInput: typeof VelvetInput;
  'velvet-link': typeof VelvetLink;
  VelvetLink: typeof VelvetLink;
  'velvet-progress': typeof VelvetProgress;
  VelvetProgress: typeof VelvetProgress;
  'velvet-radio-group': typeof VelvetRadioGroup;
  VelvetRadioGroup: typeof VelvetRadioGroup;
  'velvet-radio': typeof VelvetRadio;
  VelvetRadio: typeof VelvetRadio;
  'velvet-select': typeof VelvetSelect;
  VelvetSelect: typeof VelvetSelect;
  'velvet-select/option': typeof VelvetSelectOption;
  'VelvetSelect::Option': typeof VelvetSelectOption;
  'velvet-spinner': typeof VelvetSpinner;
  VelvetSpinner: typeof VelvetSpinner;
  'velvet-switch': typeof VelvetSwitch;
  VelvetSwitch: typeof VelvetSwitch;
  'velvet-tag': typeof VelvetTag;
  VelvetTag: typeof VelvetTag;
  'velvet-textarea': typeof VelvetTextarea;
  VelvetTextarea: typeof VelvetTextarea;
  'velvet-tooltip': typeof VelvetTooltip;
  VelvetTooltip: typeof VelvetTooltip;
  'velvet-tooltip/content': typeof VelvetTooltipContent;
  'VelvetTooltip::Content': typeof VelvetTooltipContent;

  // modifiers
  'velvet-auto-animate': typeof VelvetAutoAnimate;
}
