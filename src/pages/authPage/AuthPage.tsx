import React from 'react';
import AuthForm from '@components/containers/authForm/AuthForm';
import cl from './AuthPage.module.scss';

const AuthPage: React.FC = () => {
  return (
    <main className={cl.container}>
      <AuthForm />
    </main>
  );
};

export default AuthPage;
