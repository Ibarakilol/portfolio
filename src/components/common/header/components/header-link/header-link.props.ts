import type { ReactNode, SyntheticEvent } from 'react';

export interface HeaderLinkProps {
  href: string;
  icon?: ReactNode;
  label: string;
  tag?: 'link' | 'a';
  target?: '_blank' | '_self' | '_parent' | '_top';
  onClick?: (evt: SyntheticEvent) => void;
}
