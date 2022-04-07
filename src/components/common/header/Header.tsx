import React from 'react';
import LogoutButton from '../logoutButton/LogoutButton';
import cl from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={cl.header}>
      <h1 className={cl.title}>Simple Hotel Check</h1>
      <LogoutButton />
    </header>
  );
};

export default Header;
