import type { SyntheticEvent } from 'react';

export interface BurgerProps {
  active: boolean;
  onClick: (evt: SyntheticEvent) => void;
}
