import type { ReactNode } from 'react';

export interface SocialLinkProps {
  className?: string;
  href: string;
  icon: ReactNode;
  label: string;
}
