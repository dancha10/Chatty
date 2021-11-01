import React from 'react';
import logoLeft from '../../../img/logoLeft.svg';
import logoRight from '../../../img/logoRight.svg';
import './style.scss';

export const Logo = () => {
  return (
    <div className="logo-wrapper">
      <img src={logoLeft} alt="logoLeft" />
      <img src={logoRight} alt="LogoRight" />
    </div>
  );
};
