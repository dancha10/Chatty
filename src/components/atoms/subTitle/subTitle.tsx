import React from 'react';
import './style.scss';

type SubTitleType = {
  text: string;
};

const SubTitle: React.FC<SubTitleType> = ({ text }) => {
  return <h2>{text}</h2>;
};

export default SubTitle;
