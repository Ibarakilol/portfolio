import type { ReactNode, SyntheticEvent } from 'react';

interface ButtonCommonProps {
  className?: string;
  label: string;
  icon?: ReactNode;
}

interface ButtonTagProps extends ButtonCommonProps {
  href?: never;
  tag?: 'button';
  target?: never;
  type?: 'submit' | 'reset' | 'button';
  onClick: (evt: SyntheticEvent) => void;
}

interface ButtonLinkTagProps extends ButtonCommonProps {
  href: string;
  tag: 'link';
  target?: '_blank' | '_self' | '_parent' | '_top';
  type?: never;
  onClick?: (evt: SyntheticEvent) => void;
}

export type ButtonProps = ButtonLinkTagProps | ButtonTagProps;
