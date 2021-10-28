import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';
import { Avatar, AvatarType } from '../../atoms/Avatar/Avatar';
import { SCREENS } from '../../../routes/endpoints';

export interface DialogPersonType extends AvatarType {
  name: string;
  message: string;
  id: number;
}

// TODO: Надо прикрутить показ что last сообщение от тебя или от собеседника

export const DialogPerson: React.FC<DialogPersonType> = ({ name, message, sex, id }) => {
  return (
    <NavLink
      to={`${SCREENS.SCREENS__MESSENGER}/${id}`}
      className="dialog-person"
      activeClassName="dialog-person--active"
    >
      <Avatar sex={sex} />
      <div className="dialog-person__body">
        <h4 className="dialog-person__name">{name}</h4>
        <span className="dialog-person__message">{message}</span>
      </div>
    </NavLink>
  );
};
