import React, { useEffect, useState } from 'react';
import './style.scss';
import { useLocation } from 'react-router-dom';
import { Logo } from '../../atoms/Logo/logo';
import { DialogPerson } from '../../molecules/DialogPerson/DialogPerson';
import profile from '../../../img/profile.svg';
// eslint-disable-next-line import/no-cycle
import { MessageBody } from '../../organisms/MessageBody/MessageBody';
import { SCREENS } from '../../../routes/endpoints';
import emptyUser from '../../../img/emptyDialogs.svg';
// eslint-disable-next-line import/no-cycle
import { CompanionListObject, MessageListObject } from '../../../page/ChatPage/ChatPage';

interface ChatType {
  CompanionListData: Array<CompanionListObject>;
  MessageListDate: Array<MessageListObject>;
}

export const Chat: React.FC<ChatType> = ({ CompanionListData, MessageListDate }) => {
  const CompanionList = CompanionListData.map(d => (
    <DialogPerson name={d.name} message={d.lastMessage} id={d.id} sex={d.sex} />
  ));

  const location = useLocation<string>();
  const peopleId = +location.pathname.slice(-1) - 1;

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
          {CompanionList.length > 0 ? CompanionList : <img src={emptyUser} alt="empty" />}
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