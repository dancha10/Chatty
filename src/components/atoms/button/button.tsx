import React from 'react';
import './style.scss';

export type ButtonType = {
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  text: string;
  onClick: () => void;
};

export const Button: React.FC<ButtonType> = ({
  type = 'submit',
  disabled = false,
  text,
  onClick,
}) => {
  return (
    <button type={type} disabled={disabled} onClick={onClick} className="btn">
      {text}
    </button>
  );
};
