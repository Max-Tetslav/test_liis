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

  const sortByStars = useCallback(
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

  const sortByPrice = useCallback(
    (direction: ESortDirections) => {
      const sortedArray = [...favourites];

      switch (direction) {
        case ESortDirections.DOWN: {
          setSortedList(sortedArray.sort((a, b) => a.priceAvg - b.priceAvg));
          break;
        }
        case ESortDirections.UP: {
          setSortedList(sortedArray.sort((a, b) => b.priceAvg - a.priceAvg));
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
            sortByStars(ESortDirections.DOWN);
          } else {
            // От большего к меньшему
            sortByStars(ESortDirections.UP);
          }
          break;
        case ESortTypes.PRICE: // По цене
          if (sortDirection === ESortDirections.DOWN) {
            // От меньшего к большему
            sortByPrice(ESortDirections.DOWN);
          } else {
            // От большего к меньшему
            sortByPrice(ESortDirections.UP);
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
