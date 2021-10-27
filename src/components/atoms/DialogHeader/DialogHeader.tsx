import React from 'react';
import './style.scss';

type DialogHeaderType = {
  name: string;
  status: string;
};

export const DialogHeader: React.FC<DialogHeaderType> = ({ name, status }) => {
  return (
    <div className="dialog-header">
      <div className="dialog-header__body">
        <h3>{name}</h3>
        <span className="dialog-header__status">{status}</span>
      </div>
    </div>
  );
};
