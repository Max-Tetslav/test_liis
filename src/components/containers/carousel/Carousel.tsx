import React from 'react';
import { useAppSelector } from '@store/index';
import cl from './Carousel.module.scss';

const Carousel: React.FC = () => {
  const imgs = useAppSelector((state) => state.carousel.list);

  return (
    <div className={cl.container}>
      {imgs.map((item, index) => (
        <img
          className={cl.img}
          src={item.path}
          alt={`carousel-${index}`}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default Carousel;
