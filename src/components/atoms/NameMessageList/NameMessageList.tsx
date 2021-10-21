import React from 'react';
import './style.scss';

type NameMessageListType = {
  name: string;
};

const NameMessageList: React.FC<NameMessageListType> = ({ name }) => {
  return <h4>{name}</h4>;
};

export default NameMessageList;
