import React, { useCallback } from 'react';
import { Input } from 'antd';
import cl from './SearchInput.module.scss';

interface ISearchInputProps {
  label: string;
  name: string;
  type: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput: React.FC<ISearchInputProps> = ({
  label,
  setValue,
  ...props
}) => {
  const changeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setValue(e.target.value);
    },
    [props.value],
  );

  return (
    <label className={cl.label} htmlFor={props.name}>
      {label}
      <Input
        {...props}
        {...(props.type === 'number' ? { min: 1, max: 365 } : null)}
        required
        onChange={changeHandler}
        className={cl.input}
      />
    </label>
  );
};

export default SearchInput;
