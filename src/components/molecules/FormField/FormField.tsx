import React from 'react';
import { Label, LabelType } from '../../atoms/Label/label';
import { Input, InputType } from '../../atoms/Input/input';

import './style.scss';

interface FormFieldType extends InputType, LabelType {}

export const FormField: React.FC<FormFieldType> = ({
  text,
  forHtml,
  placeholder,
  id,
  type,
  isError,
  InputValidator,
}) => {
  return (
    <div className="form-field">
      <Label text={text} forHtml={forHtml} />
      <Input
        type={type}
        placeholder={placeholder}
        id={id}
        isError={isError}
        InputValidator={InputValidator}
      />
    </div>
  );
};
