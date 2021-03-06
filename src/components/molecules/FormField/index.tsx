import React from 'react';
import { Label, LabelType } from '../../atoms/Label';
import { Input, InputType } from '../../atoms/Input';

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
    <>
      <Label text={text} forHtml={forHtml} />
      <Input
        type={type}
        placeholder={placeholder}
        id={id}
        isError={isError}
        InputValidator={InputValidator}
      />
    </>
  );
};
