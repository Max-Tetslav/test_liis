import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import logoutIcon from '@assets/svg/logout.svg';
import { useAppDispatch } from '@store/index';
import { logout } from '@store/redusers/auth';
import cl from './LogoutButton.module.scss';

const LogoutButton: React.FC = () => {
  const navigate = useNavigate();
  const dispath = useAppDispatch();

  const logoutHandler = useCallback(() => {
    dispath(logout());
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
