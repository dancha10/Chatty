import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ArrowBack from '../../../img/mobileArrow.svg';
import { Avatar, AvatarType } from '../Avatar';
import { ContextUserList } from '../../../utils/context';
import { SCREENS } from '../../../routes/endpoints';
import './style.scss';

export interface DialogHeaderType extends AvatarType {
  name: string;
  lastSeen: string;
}

export const DialogHeader: React.FC<DialogHeaderType> = ({ name, lastSeen, sex }) => {
  const Context = useContext(ContextUserList);
  const history = useHistory();
  return (
    <div className="dialog-header">
      <div className="dialog-header__mobile">
        <button
          type="button"
          className="dialog-header__back"
          onClick={() => {
            Context?.setGoBack(false);
            setTimeout(() => history.push(SCREENS.SCREENS__MESSENGER), 500);
          }}
        >
          <img src={ArrowBack} alt="BackDoor" />
        </button>
        <div className="dialog-header__avatar">
          <Avatar sex={sex} />
        </div>
      </div>
      <div className="dialog-header__body">
        <h3>{name}</h3>
        <span className="dialog-header__status">{lastSeen}</span>
      </div>
    </div>
  );
};
