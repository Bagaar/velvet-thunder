import type VelvetAvatarComponent from 'velvet-thunder/components/velvet-avatar';
import type VelvetButtonComponent from 'velvet-thunder/components/velvet-button';
import type VelvetDisclosureIconComponent from 'velvet-thunder/components/velvet-disclosure-icon';
import type VelvetIconButtonComponent from 'velvet-thunder/components/velvet-icon-button';
import type VelvetInputComponent from 'velvet-thunder/components/velvet-input';
import type VelvetProgressComponent from 'velvet-thunder/components/velvet-progress';
import type VelvetSpinnerComponent from 'velvet-thunder/components/velvet-spinner';
import type VelvetTagComponent from 'velvet-thunder/components/velvet-tag';

// Private:
import type VelvetClassListHelper from 'velvet-thunder/helpers/-velvet/class-list';
import type VelvetClassHelper from 'velvet-thunder/helpers/-velvet/class';
import type VelvetNoopHelper from 'velvet-thunder/helpers/-velvet/noop';

// Dependencies:
import AndHelper from '@gavant/glint-template-types/types/ember-truth-helpers/and';
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
    VelvetSpinner: typeof VelvetSpinnerComponent;
    VelvetTag: typeof VelvetTagComponent;

    // Private:
    '-velvet/class-list': typeof VelvetClassListHelper;
    '-velvet/class': typeof VelvetClassHelper;
    '-velvet/noop': typeof VelvetNoopHelper;

    // Dependencies:
    and: typeof AndHelper;
    not: typeof NotHelper;
    or: typeof OrHelper;
  }
}
