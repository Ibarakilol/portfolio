import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import MainLayout from '@/layouts/main-layout';
import MainPage from '@/pages/main-page';
import WorksPage from '@/pages/works-page';
import ScrollToTop from '@/components/common/scroll-to-top';

import { AppRoute } from '@/constants';

const App = () => {
  return (
    <Router basename={AppRoute.ROOT}>
      <ScrollToTop>
        <MainLayout>
          <Routes>
            <Route element={<MainPage />} path={AppRoute.ROOT} />
            <Route element={<WorksPage />} path={AppRoute.WORKS} />
            <Route element={<Navigate replace to={AppRoute.ROOT} />} path="*" />
          </Routes>
        </MainLayout>
      </ScrollToTop>
    </Router>
  );
};

export default App;
