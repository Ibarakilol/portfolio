import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import MainLayout from 'src/layouts/main-layout';
import MainPage from 'src/pages/main-page';
import WorksPage from 'src/pages/works-page';

import { AppRoute } from 'src/constants';

const App = () => {
  return (
    <div className="app">
      <Router basename="/">
        <MainLayout>
          <Routes>
            <Route element={<MainPage />} path={AppRoute.MAIN} />
            <Route element={<WorksPage />} path={AppRoute.WORKS} />
            <Route element={<Navigate replace to={AppRoute.MAIN} />} path="*" />
          </Routes>
        </MainLayout>
      </Router>
    </div>
  );
};

export default App;
