import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import type { HeaderLinkProps } from './header-link.props';

import './header-link.scss';

const HeaderLink = ({
  href,
  icon,
  label,
  tag = 'link',
  target = '_blank',
  onClick,
}: HeaderLinkProps) => {
  const headerLinkClasses = clsx('header-link', icon && 'header-link_with-icon');

  const renderInnerElements = () => (
    <>
      {icon && <span className="header-link__icon">{icon}</span>}
      <span className="header-link__label">{label}</span>
    </>
  );

  switch (tag) {
    case 'link':
      return (
        <NavLink
          className={({ isActive }) => clsx(headerLinkClasses, isActive && 'header-link_active')}
          to={href}
          onClick={onClick}
        >
          {renderInnerElements()}
        </NavLink>
      );
    case 'a':
      return (
        <a
          className={headerLinkClasses}
          href={href}
          target={target}
          rel="noreferrer"
          onClick={onClick}
        >
          {renderInnerElements()}
        </a>
      );
    default:
      return null;
  }
};

export default HeaderLink;
