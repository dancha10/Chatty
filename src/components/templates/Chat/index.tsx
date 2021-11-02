import React from 'react';
import { useLocation } from 'react-router-dom';
import { Logo } from '../../atoms/Logo';
import { DialogPerson } from '../../molecules/DialogPerson';
import profile from '../../../img/profile.svg';
import { SCREENS } from '../../../routes/endpoints';
import emptyUser from '../../../img/emptyDialogs.svg';
import { MessageBody } from '../../organisms/MessageBody';
import { CompanionListObject, MessageListObject } from '../../../store';
import './style.scss';

/* НУ ТУТ BULLSHIT КОД ПРостите... */

interface ChatType {
  CompanionListData: Array<CompanionListObject>;
  MessageListDate: Array<MessageListObject>;
}

export const Chat: React.FC<ChatType> = ({ CompanionListData, MessageListDate }) => {
  const CompanionList = CompanionListData.map(d => (
    <DialogPerson name={d.name} message={d.lastMessage} id={d.id} sex={d.sex} key={d.id} />
  ));

  const location = useLocation<string>();
  const peopleId = +location.pathname.slice(-1) - 1; // Eslint заменяет на const :/

  return (
    <div className="chat">
      <div className="chat__header">
        <Logo />
        <button className="chat__profile">
          <img src={profile} alt="profile-man" />
        </button>
      </div>
      <div className="chat__container">
        <div className="chat__dialog-list">
          {CompanionList.length > 0 ? (
            CompanionList
          ) : (
            <div className="chat__dialog-list--empty-user">
              <img src={emptyUser} alt="empty" />
              <div className="chat__dialog-list--text">There is no other users yet</div>
            </div>
          )}
        </div>
        <div className="chat__message-box">
          <div className="chat__message-body">
            {location.pathname === `${SCREENS.SCREENS__MESSENGER}` && (
              <div className="chat__msg-start">Select a chat to stary messaging</div>
            )}
            {!Number.isNaN(+location.pathname.slice(-1)) && (
              <MessageBody
                name={CompanionListData[peopleId].name}
                lastSeen={MessageListDate[peopleId].lastSeen}
                MessageListDate={MessageListDate[peopleId].dialog}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
