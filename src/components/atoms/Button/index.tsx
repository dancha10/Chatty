import React from 'react';
import classList from 'classnames';
import './style.scss';

export type ButtonType = {
  type?: 'button' | 'submit' | 'reset';
  appointment: 'reg' | 'log';
  disabled?: boolean;
  text: string;
  onClick?: () => void;
};

export const Button: React.FC<ButtonType> = ({
  type = 'submit',
  disabled = false,
  text,
  onClick,
  appointment,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classList(
        { 'login-btn': appointment === 'log' },
        { 'registration-btn': appointment === 'reg' }
      )}
    >
      {text}
    </button>
  );
};
