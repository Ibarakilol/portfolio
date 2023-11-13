import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import type { HeaderLinkProps } from './header-link.props';

import './header-link.scss';

const HeaderLink = ({ href, icon, label, tag = 'link', target = '_blank', onClick }: HeaderLinkProps) => {
  const headerLinkClasses = classNames('header-link', icon && 'header-link_icon');

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
          className={({ isActive }) => classNames(headerLinkClasses, isActive && 'header-link_active')}
          to={href}
          onClick={onClick}
        >
          {renderInnerElements()}
        </NavLink>
      );
    case 'a':
      return (
        <a className={headerLinkClasses} href={href} target={target} rel="noreferrer" onClick={onClick}>
          {renderInnerElements()}
        </a>
      );
    default:
      return null;
  }
};

export default HeaderLink;
