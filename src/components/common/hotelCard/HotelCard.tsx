import React, { useEffect, useState } from 'react';
import { Rate } from 'antd';
import { useAppDispatch, useAppSelector } from '@store/index';
import { addFavourite, removeFavourite } from '@store/redusers/currentData';
import { EFavouriteStatuses, IHotel } from '@models/hotels';
import formatDate from '@utils/helpers/formatDate';
import formatPrice from '@utils/helpers/formatPrice';
import hotelIcon from '@assets/svg/hotel.svg';
import LikeBtn from '../likeBtn/LikeBtn';
import cl from './HotelCard.module.scss';

interface IHotelCardProps {
  hotel: IHotel;
}

const HotelCard: React.FC<IHotelCardProps> = ({ hotel }) => {
  const dispatch = useAppDispatch();
  const [isFavourite, setIsFavourite] = useState<string>('');
  const currentData = useAppSelector((state) => state.currentData);
  const formatedDate = formatDate(currentData.date);

  const isAlreadyFavourite = Boolean(
    currentData.favourites.find((item) => item.hotelId === hotel.hotelId),
  );

  useEffect(() => {
    // Если при нескольких запросах вернуться к городу откуда уже есть избранные отели
    // Кнопка лайк раскрашивается
    if (
      !currentData.favourites.find((item) => item.hotelId === hotel.hotelId)
    ) {
      setIsFavourite(EFavouriteStatuses.NO);
    }

    if (isAlreadyFavourite) {
      setIsFavourite(EFavouriteStatuses.YES);
    }
  }, [currentData.favourites]);

  useEffect(() => {
    // Добавляет в избранное, если в избранном еще нет этого отеля
    if (isFavourite === EFavouriteStatuses.YES && !isAlreadyFavourite) {
      dispatch(
        addFavourite({ ...hotel, date: formatedDate, days: currentData.days }),
      );
    } else if (
      isFavourite === EFavouriteStatuses.NO &&
      currentData.favourites.find((item) => item.hotelId === hotel.hotelId)
    ) {
      // Удаляет из избранного, если в избранном уже есть этот отель
      dispatch(removeFavourite(hotel.hotelId));
    }
  }, [isFavourite]);

  return (
    <div className={cl.container}>
      <img className={cl.icon} src={hotelIcon} alt="hotel" />
      <div className={cl.content}>
        <p className={cl.title}>{hotel.hotelName}</p>
        <p
          className={cl.period}
        >{`${formatedDate} - ${currentData.days} день`}</p>
        <p className={cl.price}>
          <span className={cl.static}>Price: </span>
          <span>{`${formatPrice(hotel.priceAvg)} ₽`}</span>
        </p>
        <Rate className={cl.rate} disabled defaultValue={hotel.stars} />
        <LikeBtn
          className={cl.button}
          isActive={isFavourite}
          setIsActive={setIsFavourite}
        />
      </div>
    </div>
  );
};

export default HotelCard;
