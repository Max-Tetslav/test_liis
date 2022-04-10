import React from 'react';
import { Breadcrumb } from 'antd';
import separatorIcon from '@assets/svg/separator.svg';
import { useAppSelector } from '@store/index';
import formatDate from '@utils/helpers/formatDate';
import Carousel from '../carousel/Carousel';
import HotelsList from '../hotelsList/HotelsList';
import cl from './HotelsContent.module.scss';

const HotelsContent: React.FC = () => {
  const currentData = useAppSelector((state) => state.currentData);

  const readableDate = formatDate(currentData.date);

  return (
    <section className={cl.container}>
      <div className={cl.breadcrumbContainer}>
        <Breadcrumb className={cl.breadcrumb} separator="">
          <>
            <Breadcrumb.Item className={cl.breadcrumbItem}>
              Отели
            </Breadcrumb.Item>
            <Breadcrumb.Separator>
              <img
                src={separatorIcon}
                className={cl.breadcrumbSeparator}
                alt="breadcrumb-separator"
              />
            </Breadcrumb.Separator>
          </>
          <Breadcrumb.Item className={cl.breadcrumbItem}>
            {currentData.city}
          </Breadcrumb.Item>
        </Breadcrumb>
        <p className={cl.date}>{readableDate}</p>
      </div>
      <Carousel />

      <div className={cl.hotelsListContainer}>
        <p className={cl.favouritesText}>
          {'Добавлено в избранное: '}
          <span className={cl.counter}>{currentData.favourites.length}</span>
          {' отелей'}
        </p>
        <HotelsList />
      </div>
    </section>
  );
};

export default HotelsContent;
