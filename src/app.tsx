import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import MainLayout from '@/layouts/main-layout';
import MainPage from '@/pages/main-page';
import WorksPage from '@/pages/works-page';
import ScrollToTop from '@/components/common/scroll-to-top';

import { AppRoute } from '@/constants';

const App = () => {
  return (
    <div className="app">
      <ScrollToTop>
        <Router basename={AppRoute.ROOT}>
          <MainLayout>
            <Routes>
              <Route element={<MainPage />} path={AppRoute.ROOT} />
              <Route element={<WorksPage />} path={AppRoute.WORKS} />
              <Route element={<Navigate replace to={AppRoute.ROOT} />} path="*" />
            </Routes>
          </MainLayout>
        </Router>
      </ScrollToTop>
    </div>
  );
};

export default App;
