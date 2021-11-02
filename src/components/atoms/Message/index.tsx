import React from 'react';
import './style.scss';
import classList from 'classnames';
import fileIcon from '../../../img/file.svg';

export type MessageType = {
  message: string; // Мб поменяю
  isCompanionMessage: boolean;
  type?: 'text' | 'file';
  size?: string;
};

// Вообще не уверен, на данном этапе мне сложно продумать как это должно выглядить, по ходу работы буду исправлять )

export const Message: React.FC<MessageType> = ({
  type = 'text',
  isCompanionMessage,
  message,
  size = '4.2MB',
}) => {
  if (type === 'file')
    return (
      <div className="message">
        <div className="message__file">
          <img src={fileIcon} alt="file-ico" />
          <div className="message__body">
            <div className="message__filename">{message}</div>
            <div className="message__file-size">{size}</div>
          </div>
        </div>
      </div>
    );
  return (
    <div className={classList('message', { 'message--companion': isCompanionMessage })}>
      {message}
    </div>
  );
};
