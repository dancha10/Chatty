import React from 'react';
import fileIcon from '../../../img/file.svg';
import './style.scss';
import { MeMessageType } from '../MyMessage/MyMessage';

export const CompanionMessage: React.FC<MeMessageType> = ({
  type = 'text',
  myMessage,
  size = '4.2MB',
}) => {
  if (type === 'file')
    return (
      <div className="companion-message">
        <div className="companion-message__file">
          <img src={fileIcon} alt="file-ico" />
          <div className="companion-message__body">
            <div className="companion-message__filename">{myMessage}</div>
            <div className="companion-message__file-size">{size}</div>
          </div>
        </div>
      </div>
    );
  return <div className="companion-message">{myMessage}</div>;
};
