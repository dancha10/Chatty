import React from 'react';
import './style.scss';

type LabelType = {
  text: string;
  forHtml?: string;
};

const Label: React.FC<LabelType> = ({ text, forHtml }) => {
  return (
    <label htmlFor={forHtml} className="label">
      {text}
    </label>
  );
};

Label.defaultProps = {
  forHtml: '',
};

export default Label;
