import React from 'react';
import send from '../../../img/telegram.svg';
import './style.scss';

export const SendMessage = () => {
  return (
    <button type="submit" className="send-message">
      <img src={send} alt="send-message" />
    </button>
  );
};
