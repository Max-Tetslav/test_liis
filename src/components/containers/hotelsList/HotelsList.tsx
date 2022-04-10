import React from 'react';
import { useAppSelector } from '@store/index';
import HotelCard from '@components/common/hotelCard/HotelCard';
import cl from './HotelsList.module.scss';

const HotelsList: React.FC = () => {
  const hotels = useAppSelector((state) => state.hotels);

  return (
    <div className={cl.hotelsList}>
      {hotels.isLoading && <h1 className={cl.loading}>Загрузка</h1>}
      {!hotels.isLoading && hotels.isError && (
        <h1 className={cl.loading}>
          Что-то пошло не так =(
          <br /> Попробуйте снова
        </h1>
      )}{' '}
      {!hotels.isLoading &&
        !hotels.isError &&
        hotels.list.map((item) => (
          <HotelCard hotel={item} key={item.hotelId} />
        ))}
    </div>
  );
};

export default HotelsList;
