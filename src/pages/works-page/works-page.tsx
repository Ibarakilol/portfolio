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
              title="Notion"
              description="Клон Notion, созданный с использованием Next.js"
              href="https://nextjs-notion-clone-ten.vercel.app"
              imageSrc="/works/notion.jpg"
            />
            <WorkItem
              title="ChatGPT"
              description="Клон ChatGPT, созданный с использованием Next.js"
              href="https://nextjs-chatgpt-clone-sand.vercel.app"
              imageSrc="/works/chatgpt.jpg"
            />
            <WorkItem
              title="DALL·E"
              description="Клон DALL·E, созданный с использованием Next.js"
              href="https://nextjs-dalle-clone.vercel.app"
              imageSrc="/works/dalle.jpg"
            />
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
              title="Node.js API Template"
              description="Простой Node.js API шаблон с JWT авторизацией"
              href="https://github.com/Ibarakilol/futures-arbitrage-bot"
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
