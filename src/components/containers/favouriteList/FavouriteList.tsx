import React, { useCallback, useEffect, useState } from 'react';
import { ESortDirections, ESortTypes, IFavouriteHotel } from '@models/hotels';
import { useAppSelector } from '@store/index';
import FavouriteCard from '@components/common/favouriteCard/FavouriteCard';
import cl from './FavouriteList.module.scss';

interface IFavouriteListProps {
  sortType: ESortTypes;
  sortDirection: ESortDirections;
}

const FavouriteList: React.FC<IFavouriteListProps> = ({
  sortDirection,
  sortType,
}) => {
  const favourites = useAppSelector((state) => state.currentData.favourites);
  const [sortedList, setSortedList] = useState<IFavouriteHotel[]>([]);

  useEffect(() => {
    setSortedList(favourites);
  }, [favourites]);

  const sort = useCallback(
    (direction: ESortDirections) => {
      const sortedArray = [...favourites];

      switch (direction) {
        case ESortDirections.DOWN: {
          setSortedList(sortedArray.sort((a, b) => a.stars - b.stars));
          break;
        }
        case ESortDirections.UP: {
          setSortedList(sortedArray.sort((a, b) => b.stars - a.stars));
          break;
        }

        // no default
      }
    },
    [favourites],
  );

  // Сортировка
  useEffect(() => {
    if (favourites.length > 1) {
      switch (sortType) {
        case ESortTypes.RATE: // По рейтингу
          if (sortDirection === ESortDirections.DOWN) {
            // От меньшего к большему
            sort(ESortDirections.DOWN);
          } else {
            // От большего к меньшему
            sort(ESortDirections.UP);
          }
          break;
        case ESortTypes.PRICE: // По цене
          if (sortDirection === ESortDirections.DOWN) {
            // От меньшего к большему
            sort(ESortDirections.DOWN);
          } else {
            // От большего к меньшему
            sort(ESortDirections.UP);
          }
          break;

        // no default
      }
    }
  }, [sortDirection, sortType, favourites]);

  return (
    <div className={cl.favouritesContainer}>
      {sortedList.length ? (
        sortedList.map((item) => (
          <FavouriteCard hotel={item} key={item.hotelId} />
        ))
      ) : (
        <h4 className={cl.empty}>Пусто</h4>
      )}
    </div>
  );
};

export default FavouriteList;
