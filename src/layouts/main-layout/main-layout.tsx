import Footer from '@/components/common/footer';
import Header from '@/components/common/header';
import TableImage from '@/assets/images/table.png';

import type { MainLayoutProps } from './main-layout.props';

import './main-layout.scss';

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="main-layout">
      <Header />
      <div className="main-layout__wrapper">
        <img className="main-layout__hero" src={TableImage} alt="Lopanov Nikita" />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
