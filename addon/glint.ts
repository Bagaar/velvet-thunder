import type VelvetAvatar from 'velvet-thunder/components/velvet-avatar';
import type VelvetButton from 'velvet-thunder/components/velvet-button';
import type VelvetCheckbox from 'velvet-thunder/components/velvet-checkbox';
import type VelvetCheckboxGroup from 'velvet-thunder/components/velvet-checkbox-group';
import type VelvetDisclosureIcon from 'velvet-thunder/components/velvet-disclosure-icon';
import type VelvetDropdown from 'velvet-thunder/components/velvet-dropdown';
import type VelvetDropdownContent from 'velvet-thunder/components/velvet-dropdown/content';
import type VelvetIconButton from 'velvet-thunder/components/velvet-icon-button';
import type VelvetInput from 'velvet-thunder/components/velvet-input';
import type VelvetProgress from 'velvet-thunder/components/velvet-progress';
import type VelvetRadio from 'velvet-thunder/components/velvet-radio';
import type VelvetRadioGroup from 'velvet-thunder/components/velvet-radio-group';
import type VelvetSelect from 'velvet-thunder/components/velvet-select';
import type VelvetSelectOption from 'velvet-thunder/components/velvet-select/option';
import type VelvetSpinner from 'velvet-thunder/components/velvet-spinner';
import type VelvetTag from 'velvet-thunder/components/velvet-tag';
import type VelvetTextarea from 'velvet-thunder/components/velvet-textarea';

// Private:
import type VelvetClassListHelper from 'velvet-thunder/helpers/-velvet/class-list';

// Dependencies:
import type OrHelper from 'ember-truth-helpers/helpers/or';

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    VelvetAvatar: typeof VelvetAvatar;
    VelvetButton: typeof VelvetButton;
    VelvetCheckbox: typeof VelvetCheckbox;
    VelvetCheckboxGroup: typeof VelvetCheckboxGroup;
    VelvetDisclosureIcon: typeof VelvetDisclosureIcon;
    VelvetDropdown: typeof VelvetDropdown;
    VelvetIconButton: typeof VelvetIconButton;
    VelvetInput: typeof VelvetInput;
    VelvetProgress: typeof VelvetProgress;
    VelvetRadio: typeof VelvetRadio;
    VelvetRadioGroup: typeof VelvetRadioGroup;
    VelvetSelect: typeof VelvetSelect;
    VelvetSpinner: typeof VelvetSpinner;
    VelvetTag: typeof VelvetTag;
    VelvetTextarea: typeof VelvetTextarea;

    'velvet-avatar': typeof VelvetAvatar;
    'velvet-button': typeof VelvetButton;
    'velvet-checkbox': typeof VelvetCheckbox;
    'velvet-checkbox-group': typeof VelvetCheckboxGroup;
    'velvet-disclosure-icon': typeof VelvetDisclosureIcon;
    'velvet-dropdown': typeof VelvetDropdown;
    'velvet-dropdown/content': typeof VelvetDropdownContent;
    'velvet-icon-button': typeof VelvetIconButton;
    'velvet-input': typeof VelvetInput;
    'velvet-progress': typeof VelvetProgress;
    'velvet-radio': typeof VelvetRadio;
    'velvet-radio-group': typeof VelvetRadioGroup;
    'velvet-select': typeof VelvetSelect;
    'velvet-select/option': typeof VelvetSelectOption;
    'velvet-spinner': typeof VelvetSpinner;
    'velvet-tag': typeof VelvetTag;
    'velvet-textarea': typeof VelvetTextarea;

    // Private:
    '-velvet/class-list': typeof VelvetClassListHelper;

    // Dependencies:
    or: typeof OrHelper;
  }
}
