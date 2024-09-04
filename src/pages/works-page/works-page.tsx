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
              title="Посбон"
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
              title="Futures Arbitrage Bot"
              description="Telegram бот по поиску арбитражных сделок между биржами на фьючерсах"
              href="https://github.com/Ibarakilol/futures-arbitrage-bot"
              withIcon
            />
            <WorkItem
              title="BestChange Arbitrage Bot"
              description="Telegram бот по поиску арбитражных сделок между Binance/Bybit и BestChange"
              href="https://github.com/Ibarakilol/bestchange-arbitrage-bot"
              withIcon
            />
            <WorkItem
              title="Gulp Webpack Starter"
              description="Готовый к коммерческой верстке Gulp/Webpack шаблон"
              href="https://github.com/Ibarakilol/gulp-webpack-starter"
              withIcon
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WorksPage;
