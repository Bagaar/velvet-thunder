import '@glint/environment-ember-loose';
import 'ember-source/types';
import 'ember-source/types/preview';

import type EmberPageTitleRegistry from 'ember-page-title/template-registry';
import type VelvetThunderRegistry from '@bagaar/velvet-thunder/template-registry';

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry
    extends EmberPageTitleRegistry,
      VelvetThunderRegistry {}
}
