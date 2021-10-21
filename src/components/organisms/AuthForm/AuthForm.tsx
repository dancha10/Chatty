import React from 'react';
import InputForm from '../../molecules/InputForm/InputForm';
import Button from '../../atoms/button/button';
import './style.scss';

const AuthForm = () => {
  return (
    <form action="POST">
      <InputForm placeholder="Input user name" forHtml="name" id="name" text="User name" />
      <InputForm
        type="password"
        placeholder="Input password"
        forHtml="pass"
        id="pass"
        text="Password"
        isError
      />
      <Button type="submit" disabled={false} onClick={() => {}} text="Log In" />
    </form>
  );
};

export default AuthForm;
