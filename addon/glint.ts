import type VelvetAvatarComponent from 'velvet-thunder/components/velvet-avatar';
import type VelvetButtonComponent from 'velvet-thunder/components/velvet-button';
import type VelvetDisclosureIconComponent from 'velvet-thunder/components/velvet-disclosure-icon';
import type VelvetIconButtonComponent from 'velvet-thunder/components/velvet-icon-button';
import type VelvetInputComponent from 'velvet-thunder/components/velvet-input';
import type VelvetProgressComponent from 'velvet-thunder/components/velvet-progress';
import type VelvetSelectComponent from 'velvet-thunder/components/velvet-select';
import type VelvetSelectOptionComponent from 'velvet-thunder/components/velvet-select/option';
import type VelvetSpinnerComponent from 'velvet-thunder/components/velvet-spinner';
import type VelvetTagComponent from 'velvet-thunder/components/velvet-tag';
import type VelvetTextareaComponent from 'velvet-thunder/components/velvet-textarea';

// Private:
import type VelvetClassListHelper from 'velvet-thunder/helpers/-velvet/class-list';
import type VelvetClassHelper from 'velvet-thunder/helpers/-velvet/class';
import type VelvetNoopHelper from 'velvet-thunder/helpers/-velvet/noop';

// Dependencies:
import AndHelper from '@gavant/glint-template-types/types/ember-truth-helpers/and';
import EqHelper from '@gavant/glint-template-types/types/ember-truth-helpers/eq';
import NotHelper from '@gavant/glint-template-types/types/ember-truth-helpers/not';
import OrHelper from '@gavant/glint-template-types/types/ember-truth-helpers/or';

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    VelvetAvatar: typeof VelvetAvatarComponent;
    VelvetButton: typeof VelvetButtonComponent;
    VelvetDisclosureIcon: typeof VelvetDisclosureIconComponent;
    VelvetIconButton: typeof VelvetIconButtonComponent;
    VelvetInput: typeof VelvetInputComponent;
    VelvetProgress: typeof VelvetProgressComponent;
    VelvetSelect: typeof VelvetSelectComponent;
    VelvetSpinner: typeof VelvetSpinnerComponent;
    VelvetTag: typeof VelvetTagComponent;
    VelvetTextarea: typeof VelvetTextareaComponent;

    'velvet-select/option': typeof VelvetSelectOptionComponent;

    // Private:
    '-velvet/class-list': typeof VelvetClassListHelper;
    '-velvet/class': typeof VelvetClassHelper;
    '-velvet/noop': typeof VelvetNoopHelper;

    // Dependencies:
    and: typeof AndHelper;
    eq: typeof EqHelper;
    not: typeof NotHelper;
    or: typeof OrHelper;
  }
}
