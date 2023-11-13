import React from 'react';
import { Helmet } from 'react-helmet';

import WorkItem from './components/work-item';

import './works-page.scss';

const WorksPage = () => {
  return (
    <>
      <Helmet>
        <title>Никита Лопанов - Работы</title>
      </Helmet>

      <div className="works-page">
        <div className="works-page__block">
          <span className="works-page__title">Работы</span>
          <div className="works-page__items">
            <WorkItem
              title="Posbon"
              description="Веб-сайт агента ритуальных услуг организации «ПОСБОН»"
              href="https://lopanov-posbon24.ru"
              imageSrc="/works/posbon.jpg"
            />
          </div>
        </div>

        <div className="works-page__block">
          <span className="works-page__title">Боты/Скрипты</span>
          <div className="works-page__items">
            <WorkItem
              title="Gulp Webpack Starter"
              description="Готовый к коммерческой верстке Gulp/Webpack стартер"
              href="https://github.com/Ibarakilol/gulp-webpack-starter"
              withIcon
            />
            <WorkItem
              title="TikTok Downloader Bot"
              description="Telegram-бот для загрузки видео с TikTok без водяных знаков"
              href="https://github.com/Ibarakilol/tiktok-downloader-bot"
              withIcon
            />
            <WorkItem
              title="Futures Arbitrage Bot"
              description="Telegram-бот для поиска арбитражных связок между биржами"
              href="https://github.com/Ibarakilol/futures-arbitrage-bot"
              withIcon
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WorksPage;
