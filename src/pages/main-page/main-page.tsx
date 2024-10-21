import { Helmet } from 'react-helmet';

import Button from '@/components/ui/button';
import SocialLink from './components/social-link';
import { ReactComponent as ChevronRightIcon } from '@/assets/icons/chevron-right.svg';
import { ReactComponent as TelegramIcon } from '@/assets/icons/telegram.svg';

import { AppRoute } from '@/constants';

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
          <p className="main-page__info-text">Frontend-разработчик (React.js / Next.js)</p>
        </section>

        <section className="main-page__block">
          <h2 className="main-page__block-title">Обо мне</h2>
          <p className="main-page__block-text">
            Привет! Меня зовут Никита, я Frontend-разработчик с большим опытом работы, увлеченный
            созданием цифровых сервисов и материалов. У меня есть талант ко всему, что касается
            запуска "продуктов", от планирования и проектирования до решения реальных проблем с
            помощью кода.
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
            HTML5/CSS3, Flex/Grid, SCSS, BEM, Tailwind CSS, JavaScript/TypeScript, React.js,
            Next.js, Redux, Mobx, Zustand, Jest, Webpack, Gulp, Node.js, Express.js, Git, Figma.
          </p>
        </section>

        <section className="main-page__block">
          <h2 className="main-page__block-title">Социальные сети</h2>
          <ul className="main-page__block-list">
            <li className="main-page__block-item">
              <SocialLink
                label="@ibarakil0l"
                href="https://t.me/ibarakil0l"
                icon={<TelegramIcon />}
              />
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default MainPage;
