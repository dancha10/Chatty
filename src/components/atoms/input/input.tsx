import React, { useState } from 'react';
import './style.scss';
import classList from 'classnames';

type InputType = {
  placeholder: string;
  type?: 'text' | 'password';
  isError?: boolean;
  id?: string;
};

const Input: React.FC<InputType> = ({ type, placeholder, isError, id }) => {
  const [active, setActive] = useState(false);
  const isActive = (value: string): void => (value === '' ? setActive(false) : setActive(true));

  return (
    <div className={classList({ input__wrapper: isError })}>
      <input
        type={type}
        placeholder={placeholder}
        onChange={event => isActive(event.target.value)}
        className={classList('input', { _err: isError }, { _active: active })}
        id={id}
      />
    </div>
  );
};

Input.defaultProps = {
  type: 'text',
  isError: false,
  id: '',
};

export default Input;
