import React from 'react';
import './style.scss';

type NameDialogType = {
  name: string;
};

const NameDialog: React.FC<NameDialogType> = ({ name }) => {
  return <h3>{name}</h3>;
};

export default NameDialog;
