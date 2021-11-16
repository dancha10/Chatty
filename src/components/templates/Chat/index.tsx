import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ClassList from 'classnames';
import { Logo } from '../../atoms/Logo';
import { DialogPerson } from '../../molecules/DialogPerson';
import profile from '../../../img/profile.svg';
import { SCREENS } from '../../../routes/endpoints';
import emptyUser from '../../../img/emptyDialogs.svg';
import { MessageBody } from '../../organisms/MessageBody';
import { CompanionListObject, MessageListObject } from '../../../store';
import './style.scss';
import { ContextUserList } from '../../../utils/context';

interface ChatType {
  CompanionListData: Array<CompanionListObject>;
  MessageListDate: Array<MessageListObject>;
}

export const Chat: React.FC<ChatType> = ({ CompanionListData, MessageListDate }) => {
  const location = useLocation<string>();
  const peopleID = +location.pathname.slice(-1) - 1;

  const getCompanionMessage = (id: number): boolean => {
    const lastMessage = MessageListDate.find(user => user.id === id);
    return lastMessage ? lastMessage.dialog.slice(-1)[0].isCompanionMessage : false;
  };

  const getLastMessage = (id: number): string => {
    const lastMessage = MessageListDate.find(user => user.id === id);
    return lastMessage ? lastMessage.dialog[lastMessage.dialog.length - 1].message : '';
  };
  const [isGoBack, setGoBack] = useState<boolean>(false);

  const CompanionList = CompanionListData.map(dialog => (
    <ContextUserList.Provider value={{ setGoBack }}>
      <DialogPerson
        name={dialog.name}
        message={getLastMessage(dialog.id)}
        isCompanionMessage={getCompanionMessage(dialog.id)}
        id={dialog.id}
        sex={dialog.sex}
        key={dialog.id}
      />
    </ContextUserList.Provider>
  ));

  return (
    <div className="chat">
      <div className={ClassList('chat__header', { 'chat__header--hidden': isGoBack })}>
        <Logo />
        <button className="chat__profile">
          <img src={profile} alt="profile-man" />
        </button>
      </div>
      <div className="chat__container">
        <div
          className={ClassList('chat__dialog-list', {
            'chat__dialog-list--mobile-active': isGoBack,
          })}
        >
          {CompanionList.length > 0 ? (
            CompanionList
          ) : (
            <div className="chat__dialog-list--empty-user">
              <img src={emptyUser} alt="empty" />
              <div className="chat__dialog-list--text">There is no other users yet</div>
            </div>
          )}
        </div>
        <div className="chat__message-wrapper">
          <div className="chat__message-body">
            {(location.pathname === `${SCREENS.SCREENS__MESSENGER}` ||
              location.pathname === `${SCREENS.SCREENS__MESSENGER}/`) && (
              <div className="chat__msg-start">Select a chat to stary messaging</div>
            )}
            {!Number.isNaN(+location.pathname.slice(-1)) && (
              <ContextUserList.Provider value={{ setGoBack }}>
                <MessageBody
                  name={CompanionListData[peopleID].name}
                  lastSeen={MessageListDate[peopleID].lastSeen}
                  MessageListDate={MessageListDate[peopleID].dialog}
                  sex={CompanionListData[peopleID].sex}
                />
              </ContextUserList.Provider>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
