import React from 'react';
import { Helmet } from 'react-helmet';

import Button from 'src/components/ui/button';
import SocialLink from './components/social-link';
import { ReactComponent as ChevronRightIcon } from 'src/assets/icons/chevron-right.svg';
import { ReactComponent as TelegramIcon } from 'src/assets/icons/telegram.svg';

import { AppRoute } from 'src/constants';

import './main-page.scss';

const MainPage = () => {
  return (
    <>
      <Helmet>
        <title>Никита Лопанов - Главная</title>
      </Helmet>

      <div className="main-page">
        <section className="main-page__info">
          <h1 className="main-page__info-title">Никита Лопанов</h1>
          <p className="main-page__info-text">Front-End разработчик ( React.js / React Native )</p>
        </section>

        <section className="main-page__block">
          <h2 className="main-page__block-title">Обо мне</h2>
          <p className="main-page__block-text">
            Привет! Я Front-End разработчик с большим опытом работы, страстно увлеченный созданием цифровых сервисов и
            материалов. У меня есть талант ко всему, что касается запуска "продуктов", от планирования и проектирования
            до решения реальных проблем с помощью кода.
          </p>
          <Button
            className="main-page__block-button"
            label="Моё портфолио"
            href={AppRoute.WORKS}
            icon={<ChevronRightIcon />}
            tag="link"
          />
        </section>

        <section className="main-page__block">
          <h2 className="main-page__block-title">Мои навыки</h2>
          <p className="main-page__block-text">
            HTML5/CSS3, Flex/Grid, SCSS, LESS, BEM, JavaScript/TypeScript, React.js, React hooks, Redux/Redux toolkit,
            Mobx, Jest, Webpack, Gulp, Node.js, Express.js, Git, Figma, Photoshop.
          </p>
        </section>

        <section className="main-page__block">
          <h2 className="main-page__block-title">В социальных сетях</h2>
          <ul className="main-page__block-list">
            <li className="main-page__block-item">
              <SocialLink label="@ibarakil0l" href="https://t.me/ibarakil0l" icon={<TelegramIcon />} />
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default MainPage;
