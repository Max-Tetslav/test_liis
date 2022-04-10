import React from 'react';
import FavouritesBox from '../favouritesBox/FavouritesBox';
import SearchBox from '../searchBox/SearchBox';
import cl from './HotelsAside.module.scss';

const HotelsAside: React.FC = () => {
  return (
    <aside className={cl.container}>
      <SearchBox />
      <FavouritesBox />
    </aside>
  );
};

export default HotelsAside;
