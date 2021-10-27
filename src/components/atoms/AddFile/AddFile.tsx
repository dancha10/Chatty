import React from 'react';
import clip from '../../../img/clip.svg';
import './style.scss';

export const AddFile = () => {
  return (
    <label htmlFor="file_clip" className="add-file">
      <img src={clip} alt="clip" />
      <input type="file" id="file_clip" className="add-file__input" />
    </label>
  );
};
