import React from 'react';
import { Label } from '../../atoms/Label';
import { Dropdown, DropdownType } from '../../atoms/Dropdown';

export const SelectField: React.FC<DropdownType> = ({ options, DropdownValidator }) => {
  return (
    <>
      <Label text="Your gender" />
      <Dropdown options={options} DropdownValidator={DropdownValidator} />
    </>
  );
};
