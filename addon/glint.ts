import type VelvetClassListHelper from 'velvet-thunder/helpers/-velvet/class-list';
import type VelvetClassHelper from 'velvet-thunder/helpers/-velvet/class';
import type VelvetNoopHelper from 'velvet-thunder/helpers/-velvet/noop';

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    // Private:
    '-velvet/class-list': typeof VelvetClassListHelper;
    '-velvet/class': typeof VelvetClassHelper;
    '-velvet/noop': typeof VelvetNoopHelper;
  }
}
