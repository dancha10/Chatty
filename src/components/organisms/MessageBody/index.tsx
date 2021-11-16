import React from 'react';
import './style.scss';
import { DialogHeader, DialogHeaderType } from '../../atoms/DialogHeader';
import { Textarea } from '../../molecules/Textarea';
import { Message } from '../../atoms/Message';
import { DialogMessageDataType } from '../../../store';
import { AvatarType } from '../../atoms/Avatar';

interface MessageBodyType extends DialogHeaderType, AvatarType {
  MessageListDate: Array<DialogMessageDataType>;
}

export const MessageBody: React.FC<MessageBodyType> = ({
  name,
  lastSeen,
  MessageListDate,
  sex,
}) => {
  const MessageList = MessageListDate.map(messages => {
    return (
      <li key={messages.idMessage}>
        <Message
          message={messages.message}
          isCompanionMessage={messages.isCompanionMessage}
          type={messages.type}
          size={messages.type === 'file' ? messages.size : ''}
        />
      </li>
    );
  });

  return (
    <div className="message-body">
      <div className="message-body__header">
        <DialogHeader name={name} lastSeen={lastSeen} sex={sex} />
      </div>
      <div className="message-body__message-box">{MessageList}</div>
      <div className="message-body__textarea">
        <Textarea />
      </div>
    </div>
  );
};
