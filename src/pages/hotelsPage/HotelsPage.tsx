import React from 'react';
import Header from '@components/common/header/Header';
import cl from './HotelsPage.module.scss';

const HotelsPage: React.FC = () => {
  return (
    <main className={cl.container}>
      <Header />
    </main>
  );
};

export default HotelsPage;
