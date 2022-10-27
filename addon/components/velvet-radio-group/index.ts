import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';
import { WithBoundArgs } from '@glint/template';
import type VelvetRadioComponent from 'velvet-thunder/components/velvet-radio';
import type { Size } from 'velvet-thunder/components/velvet-radio';

interface VelvetRadioGroupComponentSignature {
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
          typeof VelvetRadioComponent,
          'groupValue' | 'inGroup' | 'isDisabled' | 'name' | 'onChange' | 'size'
        >;
      }
    ];
  };
  Element: HTMLDivElement;
}

export default class VelvetRadioGroupComponent extends Component<VelvetRadioGroupComponentSignature> {
  uniqueName = guidFor(this);
}
