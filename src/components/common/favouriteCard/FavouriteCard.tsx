import React, { useEffect, useState } from 'react';
import { Rate } from 'antd';
import { EFavouriteStatuses, IFavouriteHotel } from '@models/hotels';
import { useAppDispatch } from '@store/index';
import { removeFavourite } from '@store/redusers/currentData';
import formatPrice from '@utils/helpers/formatPrice';
import LikeBtn from '../likeBtn/LikeBtn';
import cl from './FavouriteCard.module.scss';

interface IFavoutiteCardProps {
  hotel: IFavouriteHotel;
}

const FavouriteCard: React.FC<IFavoutiteCardProps> = ({ hotel }) => {
  const dispatch = useAppDispatch();
  const [isFavourive, setIsFavourite] = useState<string>(
    EFavouriteStatuses.YES,
  );

  useEffect(() => {
    if (isFavourive === EFavouriteStatuses.NO) {
      dispatch(removeFavourite(hotel.hotelId));
    }
  }, [isFavourive]);

  return (
    <div className={cl.container}>
      <p className={cl.title}>{hotel.hotelName}</p>
      <p className={cl.period}>{`${hotel.date} - ${hotel.days} день`}</p>
      <p className={cl.price}>
        <span className={cl.static}>Price:</span>
        <span>{`${formatPrice(hotel.priceAvg)} ₽`}</span>
      </p>
      <Rate className={cl.rate} disabled defaultValue={hotel.stars} />
      <LikeBtn
        className={cl.button}
        isActive={isFavourive}
        setIsActive={setIsFavourite}
      />
    </div>
  );
};

export default FavouriteCard;
