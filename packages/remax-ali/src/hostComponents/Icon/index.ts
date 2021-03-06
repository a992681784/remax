import * as React from 'react';
import { createHostComponent } from '@remax/shared';

export interface IconProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className: string;
  type:
    | 'info'
    | 'warn'
    | 'waiting'
    | 'cancel'
    | 'download'
    | 'search'
    | 'clear'
    | 'success'
    | 'success_no_circle'
    | 'loading';
  size?: number;
  color?: string;
}

export const Icon: React.ComponentType<IconProps> = createHostComponent<IconProps>('icon');
