import React from 'react';
import './style.scss';
import { SendMessage } from '../../atoms/SendMessage/SendMessage';
import { AddFile } from '../../atoms/AddFile/AddFile';

type TextareaType = {
  placeholder?: string;
};

export const Textarea: React.FC<TextareaType> = ({ placeholder = 'Write something...' }) => {
  return (
    <form className="textarea">
      <div className="textarea__button--file">
        <AddFile />
      </div>
      <textarea
        name="textarea-message"
        id="textarea-message"
        cols={30}
        rows={5}
        placeholder={placeholder}
        className="textarea__input"
      />
      <div className="textarea__button--send">
        <SendMessage />
      </div>
    </form>
  );
};
