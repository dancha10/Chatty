import React from 'react';
import './style.scss';

type TitleType = {
  mainText: string;
  secondText?: string;
  thirdText?: string;
};
// Не знаю есть ли смысл ее создавать, т.к. H1 принцепи используется на всех сайтах всего 1 раз, но на всякий случай сделал
const Title: React.FC<TitleType> = ({ mainText, secondText, thirdText }) => {
  return (
    <h1 className="Text">
      {mainText}
      <span className="Text__second"> {secondText}</span>
      <span className="Text__third">{thirdText}</span>
    </h1>
  );
};

Title.defaultProps = {
  secondText: '',
  thirdText: '',
};

export default Title;
