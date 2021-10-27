import React from 'react';
import './style.scss';
import male from '../../../img/male.svg';
import female from '../../../img/female.svg';

export type AvatarType = {
  sex: 'male' | 'female';
};

export const Avatar: React.FC<AvatarType> = ({ sex }) => {
  if (sex === 'female') return <img src={female} alt="female" className="avatar-person" />;
  return <img src={male} alt="male" className="avatar-person" />;
};
