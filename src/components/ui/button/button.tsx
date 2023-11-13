import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import type { ButtonProps } from './button.props';

import './button.scss';

const Button = ({
  className,
  href = '',
  icon,
  label,
  tag = 'button',
  target,
  type = 'button',
  onClick,
}: ButtonProps) => {
  const buttonClasses = classNames('button', icon && 'button_icon', className);

  const renderInnerElements = () => (
    <>
      {icon && <span className="button__icon">{icon}</span>}
      <span className="button__label">{label}</span>
    </>
  );

  switch (tag) {
    case 'button':
      return (
        <button className={buttonClasses} aria-label={label} type={type} onClick={onClick}>
          {renderInnerElements()}
        </button>
      );
    case 'link':
      return (
        <Link className={buttonClasses} aria-label={label} target={target || '_self'} to={href}>
          {renderInnerElements()}
        </Link>
      );
    default:
      return null;
  }
};

export default Button;
