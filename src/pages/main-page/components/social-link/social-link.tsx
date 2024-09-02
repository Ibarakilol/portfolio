import clsx from 'clsx';

import type { SocialLinkProps } from './social-link.props';

import './social-link.scss';

const SocialLink = ({ className, href, icon, label }: SocialLinkProps) => {
  return (
    <a className={clsx('social-link', className)} href={href} target="_blank" rel="noreferrer">
      <span className="social-link__icon">{icon}</span>
      <span className="social-link__label">{label}</span>
    </a>
  );
};

export default SocialLink;
