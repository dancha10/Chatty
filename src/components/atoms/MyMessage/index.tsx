import React from 'react';
import './style.scss';
import fileIcon from '../../../img/file.svg';

export type MeMessageType = {
  myMessage: string; // Мб поменяю
  type?: 'text' | 'file';
  size?: string;
};

// Вообще не уверен, на данном этапе мне сложно продумать как это должно выглядить, по ходу работы буду исправлять )

export const MyMessage: React.FC<MeMessageType> = ({
  type = 'text',
  myMessage,
  size = '4.2MB',
}) => {
  if (type === 'file')
    return (
      <div className="my-message">
        <div className="my-message__file">
          <img src={fileIcon} alt="file-ico" />
          <div className="my-message__body">
            <div className="my-message__filename">{myMessage}</div>
            <div className="my-message__file-size">{size}</div>
          </div>
        </div>
      </div>
    );
  return <div className="my-message">{myMessage}</div>;
};
