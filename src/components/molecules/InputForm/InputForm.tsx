import React from 'react';
import Label from '../../atoms/label/label';
import Input from '../../atoms/input/input';
import './style.scss';
// К след. разу надо будет оптимизировать
type InputFormType = {
  placeholder: string;
  id?: string;
  forHtml?: string;
  text: string;
  type?: 'text' | 'password';
  isError?: boolean;
};

const InputForm: React.FC<InputFormType> = ({ text, forHtml, placeholder, id, type, isError }) => {
  return (
    <div className="InputForm">
      <Label text={text} forHtml={forHtml} />
      <Input type={type} placeholder={placeholder} id={id} isError={isError} />
    </div>
  );
};

InputForm.defaultProps = {
  forHtml: '',
  id: '',
  type: 'text',
  isError: false,
};

export default InputForm;
