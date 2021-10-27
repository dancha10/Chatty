import React from 'react';
import './style.scss';

export type LabelType = {
  text: string;
  forHtml?: string;
};

export const Label: React.FC<LabelType> = ({ text, forHtml }) => {
  return (
    <label htmlFor={forHtml} className="label">
      {text}
    </label>
  );
};
