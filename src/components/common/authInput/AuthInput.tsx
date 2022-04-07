import React from 'react';
import { ErrorMessage, Field, useField } from 'formik';
import classNames from 'classnames';
import cl from './AuthInput.module.scss';
import { EAuthInputTypes } from '@models/auth';

interface IAuthInput {
  label: string;
  name: string;
  type: string;
}

const AuthInput: React.FC<IAuthInput> = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  const inputClasses = classNames(cl.label, {
    [cl.errorColor]: meta.error,
  });

  return (
    <label className={inputClasses} htmlFor={field.name}>
      {label}
      <Field
        {...field}
        {...props}
        className={cl.input}
        autoComplete={
          props.type === EAuthInputTypes.PASSWORD ? 'current-password' : 'username'
        }
      />
      <ErrorMessage name={field.name}>
        {(msg) => <span className={cl.error}>{msg}</span>}
      </ErrorMessage>
    </label>
  );
};

export default AuthInput;
