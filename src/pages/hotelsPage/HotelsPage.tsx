import React from 'react';
import Header from '@components/common/header/Header';
import HotelsAside from '@components/containers/hotelsAside/HotelsAside';
import HotelsContent from '@components/containers/hotelsContent/HotelsContent';
import cl from './HotelsPage.module.scss';

const HotelsPage: React.FC = () => {
  return (
    <main className={cl.container}>
      <Header />
      <div className={cl.contentWrapper}>
        <HotelsAside />
        <HotelsContent />
      </div>
    </main>
  );
};

export default HotelsPage;
