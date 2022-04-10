import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@store/index';

import AuthPage from '@pages/authPage/AuthPage';
import HotelsPage from '@pages/hotelsPage/HotelsPage';
import NotFoundPage from '@pages/notFoundPage/NotFoundPage';
import RequireAuth from '@components/common/requireAuth/RequireAuth';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route index element={<AuthPage />} />
          <Route
            path="/hotels"
            element={
              <RequireAuth>
                <HotelsPage />
              </RequireAuth>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
