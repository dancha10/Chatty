import React, { useState } from 'react';
import './style.scss';
import classList from 'classnames';

export type InputType = {
  placeholder: string;
  type?: 'text' | 'password';
  isError?: boolean;
  id?: string;
  InputValidator?: Object;
};

export const Input: React.FC<InputType> = ({
  type = 'text',
  placeholder,
  isError = false,
  id,
  InputValidator,
}) => {
  const [active, setActive] = useState(false);
  const isActive = (value: string): void => (value === '' ? setActive(false) : setActive(true));

  return (
    <div className={classList('input-wrapper', { 'input-wrapper--error': isError })}>
      <input
        type={type}
        {...InputValidator}
        placeholder={placeholder}
        onChange={event => isActive(event.target.value)}
        className={classList('input', { 'input--err': isError }, { 'input--active': active })}
        id={id}
      />
    </div>
  );
};
