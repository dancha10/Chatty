import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';
import { Avatar, AvatarType } from '../../atoms/Avatar';
import { SCREENS } from '../../../routes/endpoints';
import { DialogMessageDataType } from '../../../store';
import { ContextUserList } from '../../../utils/context';

type MessageList = Pick<DialogMessageDataType, 'isCompanionMessage'>;

export interface DialogPersonType extends AvatarType, MessageList {
  name: string;
  message: string;
  id: number;
}

export const DialogPerson: React.FC<DialogPersonType> = ({
  name,
  message,
  sex,
  id,
  isCompanionMessage,
}) => {
  const Context = useContext(ContextUserList);
  return (
    <NavLink
      to={`${SCREENS.SCREENS__MESSENGER}/${id}`}
      className="dialog-person"
      activeClassName="dialog-person--active"
      onClick={() => {
        if (window.innerWidth <= 767.95) Context?.setGoBack(true);
      }}
    >
      <Avatar sex={sex} />
      <div className="dialog-person__body">
        <h4 className="dialog-person__name">{name}</h4>
        <span className="dialog-person__message">
          {!isCompanionMessage ? (
            <span className="dialog-person__message--companion">You: </span>
          ) : (
            ' '
          )}
          {message}
        </span>
      </div>
    </NavLink>
  );
};
