import React from 'react';
import './style.scss';

export type DialogHeaderType = {
  name: string;
  lastSeen: string;
};

export const DialogHeader: React.FC<DialogHeaderType> = ({ name, lastSeen }) => {
  return (
    <div className="dialog-header">
      <div className="dialog-header__body">
        <h3>{name}</h3>
        <span className="dialog-header__status">{lastSeen}</span>
      </div>
    </div>
  );
};
