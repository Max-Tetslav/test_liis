import { Button } from 'antd';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import logoutIcon from '@assets/svg/logout.svg';
import cl from './LogoutButton.module.scss';

const LogoutButton: React.FC = () => {
  const navigate = useNavigate();

  const logoutHandler = useCallback(() => {
    localStorage.clear();
    navigate('/');
  }, []);

  return (
    <Button
      className={cl.button}
      type="primary"
      htmlType="button"
      onClick={logoutHandler}
    >
      Выйти
      <img src={logoutIcon} alt="logout" />
    </Button>
  );
};

export default LogoutButton;
