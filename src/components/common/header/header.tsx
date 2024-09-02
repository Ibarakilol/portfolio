import { useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import Burger from './components/burger';
import HeaderLink from './components/header-link';
import { ReactComponent as GitHubIcon } from '@/assets/icons/github.svg';

import { AppRoute } from '@/constants';

import './header.scss';

const Header = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);

  const handleCloseNav = () => {
    setOpenNav(false);
  };

  return (
    <header className="header">
      <div className="header__wrapper">
        <Link className="header__logo" to={AppRoute.ROOT}>
          {'<NL />'}
        </Link>

        <nav className={clsx('header__nav', openNav && 'header__nav_active')}>
          <HeaderLink label="Работы" href={AppRoute.WORKS} onClick={handleCloseNav} />
          <HeaderLink label="Резюме" href="/cv/cv_rus_doc.pdf" tag="a" onClick={handleCloseNav} />
          <HeaderLink
            label="GitHub"
            href="https://github.com/Ibarakilol"
            icon={<GitHubIcon />}
            tag="a"
            onClick={handleCloseNav}
          />
        </nav>

        <Burger active={openNav} onClick={() => setOpenNav((prevState) => !prevState)} />
      </div>
    </header>
  );
};

export default Header;
