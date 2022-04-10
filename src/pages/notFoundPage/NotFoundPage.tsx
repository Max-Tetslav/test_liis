import { Button } from 'antd';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import cl from './NotFoundPage.module.scss';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const clickHandler = useCallback(() => {
    navigate('/');
  }, []);

  return (
    <main className={cl.container}>
      <div className={cl.contentContainer}>
        <h1 className={cl.text}>Такой страницы не существует!</h1>
        <Button className={cl.button} onClick={clickHandler}>
          На страницу авторизации
        </Button>
      </div>
    </main>
  );
};

export default NotFoundPage;
