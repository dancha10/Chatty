import React from 'react';
import InputForm from '../../molecules/InputForm/InputForm';
import Button from '../../atoms/button/button';
import './style.scss';

const AuthForm = () => {
  return (
    <form action="#" method="POST" className="AuthForm">
      <div className="AuthForm__login">
        <InputForm placeholder="Input user name" forHtml="name" id="name" text="User name" />
      </div>
      <div className="AuthForm__password">
        <InputForm
          type="password"
          placeholder="Input password"
          forHtml="pass"
          id="pass"
          text="Password"
          isError
        />
      </div>
      <Button type="submit" disabled={false} onClick={() => {}} text="Log In" />
    </form>
  );
};

export default AuthForm;
