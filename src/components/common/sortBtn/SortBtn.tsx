import React, { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import { useAppSelector } from '@store/index';
import { ESortDirections, ESortTypes } from '@models/hotels';
import cl from './SortBtn.module.scss';

interface ISortBtnProps {
  setSortType: React.Dispatch<React.SetStateAction<ESortTypes>>;
  setSortDirection: React.Dispatch<React.SetStateAction<ESortDirections>>;
  buttonType: ESortTypes;
  sortType: ESortTypes;
  direction: string;
}

const SortBtn: React.FC<ISortBtnProps> = ({
  setSortType,
  setSortDirection,
  buttonType,
  sortType,
  direction,
  children,
}) => {
  const clickHandler = useCallback(() => {
    if (direction === ESortDirections.UP) {
      setSortDirection(ESortDirections.DOWN);
    } else {
      setSortDirection(ESortDirections.UP);
    }

    setSortType(buttonType);
  }, [direction]);

  // Стили
  const buttonClasses = classNames(cl.button, {
    [cl.buttonActive]: buttonType === sortType,
  });
  const upIconClasses = classNames(cl.sortIcon, {
    [cl.upSort]: direction === ESortDirections.UP && buttonType === sortType,
  });
  const downIconClasses = classNames(cl.sortIcon, {
    [cl.downSort]:
      direction === ESortDirections.DOWN && buttonType === sortType,
  });

  // Disabled если в избанном пусто
  const hasFavourites = useAppSelector(
    (state) => state.currentData.favourites.length,
  );

  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    setIsDisabled(!hasFavourites);
  }, [hasFavourites]);

  return (
    <button
      className={buttonClasses}
      onClick={clickHandler}
      disabled={isDisabled}
      type="button"
    >
      {children}
      <div className={cl.sortContainer}>
        <svg
          className={upIconClasses}
          width="9"
          height="6"
          viewBox="0 0 9 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={cl.path}
            d="M8.5 4.24264L7.43934 5.3033L4.25736 2.12132L1.07538 5.3033L0.0147181 4.24264L4.25736 0L8.5 4.24264Z"
            fill="#41522E"
          />
        </svg>
        <svg
          className={downIconClasses}
          width="9"
          height="7"
          viewBox="0 0 9 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={cl.path}
            d="M8.5 1.83245L7.43934 0.77179L4.25736 3.95377L1.07538 0.77179L0.0147181 1.83245L4.25736 6.07509L8.5 1.83245Z"
            fill="#41522E"
            fillOpacity="0.3"
          />
        </svg>
      </div>
    </button>
  );
};

export default SortBtn;
