import React from 'react';
import './style.scss';
import { DialogHeader, DialogHeaderType } from '../../atoms/DialogHeader';
import { Textarea } from '../../molecules/Textarea';
import { Message } from '../../atoms/Message';

type DialogMessageDataType = {
  idMessage: number;
  isCompanionMessage: boolean;
  message: string;
};

interface MessageBodyType extends DialogHeaderType {
  MessageListDate: Array<DialogMessageDataType>;
}

export const MessageBody: React.FC<MessageBodyType> = ({ name, lastSeen, MessageListDate }) => {
  const MessageList = MessageListDate.map(messages => {
    return (
      <li key={messages.idMessage}>
        <Message message={messages.message} isCompanionMessage={messages.isCompanionMessage} />
      </li>
    );
  });

  return (
    <div className="message-body">
      <DialogHeader name={name} lastSeen={lastSeen} />
      <div className="message-body__message-box">{MessageList}</div>
      <Textarea />
    </div>
  );
};
