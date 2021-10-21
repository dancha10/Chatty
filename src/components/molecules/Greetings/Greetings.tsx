import React from 'react';
import Logo from '../../atoms/logo/logo';
import Title from '../../atoms/title/title';
import SubTitle from '../../atoms/subTitle/subTitle';
import './style.scss';

const Greetings = () => {
  return (
    <div className="Greetings">
      <Logo />
      <Title mainText="Welcome to" secondText="Chatty" thirdText="!" />
      <SubTitle text="Please, autorize yourself" />
    </div>
  );
};

export default Greetings;
