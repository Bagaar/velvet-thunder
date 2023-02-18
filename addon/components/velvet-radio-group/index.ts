import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';
import type { WithBoundArgs } from '@glint/template';
import type VelvetRadio from 'velvet-thunder/components/velvet-radio';
import type { Size } from 'velvet-thunder/components/velvet-radio';

interface VelvetRadioGroupSignature {
  Args: {
    isDisabled?: boolean;
    name?: string;
    onChange?: (value: unknown, event: Event) => void;
    size?: Size;
    value?: unknown;
  };
  Blocks: {
    default: [
      {
        Radio: WithBoundArgs<
          typeof VelvetRadio,
          | 'groupValue'
          | 'inGroup'
          | 'isDisabled'
          | 'name'
          | 'onChangeGroup'
          | 'size'
        >;
      }
    ];
  };
  Element: HTMLDivElement;
}

export default class VelvetRadioGroup extends Component<VelvetRadioGroupSignature> {
  uniqueName = guidFor(this);
}
