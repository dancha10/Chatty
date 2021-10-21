import React from 'react';
import './style.scss';

type ButtonType = {
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  text: string;
  onClick: () => void;
};

const Button: React.FC<ButtonType> = ({ type, disabled, text, onClick }) => {
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'} // Костыль, иначе ругается EsLint
      disabled={disabled}
      onClick={onClick}
      className="btn"
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  type: 'submit',
  disabled: true,
};

export default Button;
