import React from 'react';
import './style.scss';
import { Avatar, AvatarType } from '../../atoms/Avatar/Avatar';

export interface DialogPersonType extends AvatarType {
  name: string;
  message: string;
}

// TODO: Надо прикрутить показ что last сообщение от тебя или от собеседника

export const DialogPerson: React.FC<DialogPersonType> = ({ name, message, sex }) => {
  return (
    <div className="dialog-person">
      <Avatar sex={sex} />
      <div className="dialog-person__body">
        <h4 className="dialog-person__name">{name}</h4>
        <span className="dialog-person__message">{message}</span>
      </div>
    </div>
  );
};
