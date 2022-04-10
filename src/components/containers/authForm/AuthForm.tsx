import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button } from 'antd';
import AuthInput from '@components/common/authInput/AuthInput';
import { EAuthInputTypes, IAuthData } from '@models/auth';
import { useAppDispatch } from '@store/index';
import { login } from '@store/redusers/auth';
import cl from './AuthForm.module.scss';

const AuthForm: React.FC = () => {
  const navigate = useNavigate();
  const dispath = useAppDispatch();

  const submitSuccess = useCallback((values: IAuthData) => {
    dispath(login({ ...values }));
    navigate('hotels');
  }, []);

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Неверный email адрес')
          .required('Обязательное поле!'),
        password: Yup.string()
          .required('Обязательное поле!')
          .matches(/[a-z0-9]{8,}/gi, {
            message: 'Минимум 8 символов без кириллицы',
          }),
      })}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          submitSuccess(values);
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className={cl.form}>
          <h1 className={cl.title}>Simple Hotel Check</h1>
          {/* Сделал type=text потому что не смог избавиться от всплывающей подсказки дефолтной валидации */}
          <AuthInput label="Логин" name={EAuthInputTypes.EMAIL} type="text" />
          <AuthInput
            label="Пароль"
            name={EAuthInputTypes.PASSWORD}
            type={EAuthInputTypes.PASSWORD}
          />
          <Button
            className={cl.button}
            htmlType="submit"
            block
            disabled={isSubmitting}
          >
            Войти
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default AuthForm;
