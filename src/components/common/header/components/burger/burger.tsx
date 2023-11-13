import React from 'react';
import classNames from 'classnames';

import type { BurgerProps } from './burger.props';

import './burger.scss';

const Burger = ({ active, onClick }: BurgerProps) => {
  return (
    <button className={classNames('burger', active && 'burger_active')} onClick={onClick}>
      <span className="burger__line" />
    </button>
  );
};

export default Burger;
