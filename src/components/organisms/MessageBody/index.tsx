import React from 'react';
import './style.scss';
import { DialogHeader, DialogHeaderType } from '../../atoms/DialogHeader';
import { Textarea } from '../../molecules/Textarea';
import { MyMessage } from '../../atoms/MyMessage';
import { CompanionMessage } from '../../atoms/CompanionMessage';

type DialogMessageDataType = {
  idMessage: number;
  sender: string;
  message: string;
};

interface MessageBodyType extends DialogHeaderType {
  MessageListDate: Array<DialogMessageDataType>;
}

export const MessageBody: React.FC<MessageBodyType> = ({ name, lastSeen, MessageListDate }) => {
  const MessageList = MessageListDate.map(messages => {
    if (messages.sender === 'I') return <MyMessage myMessage={messages.message} />;
    return <CompanionMessage myMessage={messages.message} />;
  });

  return (
    <div className="message-body">
      <DialogHeader name={name} lastSeen={lastSeen} />
      <div className="message-body__message-box">{MessageList}</div>
      <Textarea />
    </div>
  );
};
