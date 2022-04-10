import React, { useState } from 'react';
import SortBtn from '@components/common/sortBtn/SortBtn';
import { ESortDirections, ESortTypes } from '@models/hotels';
import FavouriteList from '../favouriteList/FavouriteList';
import cl from './FavouritesBox.module.scss';

const FavouritesBox: React.FC = () => {
  const [sortType, setSortType] = useState(ESortTypes.RATE);
  const [sortDirection, setSortDirection] = useState(ESortDirections.UP);

  return (
    <section className={cl.container}>
      <h3 className={cl.title}>Избранное</h3>
      <div className={cl.buttonsContainer}>
        <SortBtn
          setSortType={setSortType}
          setSortDirection={setSortDirection}
          direction={sortDirection}
          sortType={sortType}
          buttonType={ESortTypes.RATE}
        >
          Рейтинг
        </SortBtn>
        <SortBtn
          setSortType={setSortType}
          setSortDirection={setSortDirection}
          direction={sortDirection}
          sortType={sortType}
          buttonType={ESortTypes.PRICE}
        >
          Цена
        </SortBtn>
      </div>
      <FavouriteList sortDirection={sortDirection} sortType={sortType} />
    </section>
  );
};

export default FavouritesBox;
