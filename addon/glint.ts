import type VelvetAvatar from 'velvet-thunder/components/velvet-avatar';
import type VelvetButton from 'velvet-thunder/components/velvet-button';
import type VelvetCheckbox from 'velvet-thunder/components/velvet-checkbox';
import type VelvetCheckboxGroup from 'velvet-thunder/components/velvet-checkbox-group';
import type VelvetDisclosureIcon from 'velvet-thunder/components/velvet-disclosure-icon';
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
import type OrHelper from '@gavant/glint-template-types/types/ember-truth-helpers/or';

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    VelvetAvatar: typeof VelvetAvatar;
    VelvetButton: typeof VelvetButton;
    VelvetCheckbox: typeof VelvetCheckbox;
    VelvetCheckboxGroup: typeof VelvetCheckboxGroup;
    VelvetDisclosureIcon: typeof VelvetDisclosureIcon;
    VelvetIconButton: typeof VelvetIconButton;
    VelvetInput: typeof VelvetInput;
    VelvetProgress: typeof VelvetProgress;
    VelvetRadio: typeof VelvetRadio;
    VelvetRadioGroup: typeof VelvetRadioGroup;
    VelvetSelect: typeof VelvetSelect;
    VelvetSpinner: typeof VelvetSpinner;
    VelvetTag: typeof VelvetTag;
    VelvetTextarea: typeof VelvetTextarea;

    'velvet-checkbox': typeof VelvetCheckbox;
    'velvet-radio': typeof VelvetRadio;
    'velvet-select/option': typeof VelvetSelectOption;

    // Private:
    '-velvet/class-list': typeof VelvetClassListHelper;

    // Dependencies:
    or: typeof OrHelper;
  }
}
