import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@store/index';

import AuthPage from '@pages/authPage/AuthPage';
import HotelsPage from '@pages/hotelsPage/HotelsPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route index element={<AuthPage />} />
          <Route path="hotels" element={<HotelsPage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
