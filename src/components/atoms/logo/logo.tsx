import React from 'react';
import logoLeft from '../../../img/logoLeft.svg';
import logoRight from '../../../img/logoRight.svg';
import './style.scss';

const Logo = () => {
  return (
    <div className="LogoWrapper">
      <img src={logoLeft} alt="logoLeft" />
      <img src={logoRight} alt="LogoRight" />
    </div>
  );
};

export default Logo;
