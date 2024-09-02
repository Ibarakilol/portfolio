import clsx from 'clsx';

import type { BurgerProps } from './burger.props';

import './burger.scss';

const Burger = ({ active, onClick }: BurgerProps) => {
  return (
    <button className={clsx('burger', active && 'burger_active')} onClick={onClick}>
      <span className="burger__line" />
    </button>
  );
};

export default Burger;
