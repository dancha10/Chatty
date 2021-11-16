import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { FormField } from '../../molecules/FormField';
import { Button } from '../../atoms/Button';
import { SCREENS } from '../../../routes/endpoints';
import './style.scss';
import { Captcha } from '../../molecules/Captcha';
import { Logo } from '../../atoms/Logo';

export type FormType = {
  setLogin: (state: boolean) => void;
};

export type InputValidatorType = {
  name: string;
  pass: string;
  captcha: string;
};

export const AuthForm: React.FC<FormType> = ({ setLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputValidatorType>();
  const history = useHistory();
  const onSubmit: SubmitHandler<InputValidatorType> = data => {
    const LoginForm = new FormData();
    LoginForm.append('login', data.name);
    LoginForm.append('password', data.pass);
    LoginForm.append('captcha', data.captcha);
    fetch('http://109.194.37.212:93/api/auth/login', {
      method: 'POST',
      body: LoginForm,
    })
      .then(response => response.json())
      .then((response: string) => localStorage.setItem('connect_key', response))
      .then(() => history.push(SCREENS.SCREENS__MESSENGER))
      .catch((error: string) => console.log(error));
  };
  // TODO: add connection webSocket
  return (
    <div className="auth-form">
      <div className="auth-page__greetings">
        <Logo />
        <h1 className="auth-page__title">
          Welcome to <span className="auth-page__title--blue">Chatty</span>
          <span className="auth-page__title--light">!</span>
        </h1>
        <h2 className="auth-page__subtitle">Please, autorize yourself</h2>
      </div>
      <form className="auth-form__body" onSubmit={handleSubmit(onSubmit)}>
        <div className="auth-form__login">
          <FormField
            placeholder="Input user name"
            forHtml="name"
            id="name"
            text="User name"
            InputValidator={{
              ...register('name', {
                required: { value: true, message: 'This is field required' },
                minLength: { value: 2, message: 'Please enter more than 2 characters' },
                maxLength: { value: 30, message: 'Max length exceeded' },
                pattern: {
                  value: /^[A-Za-zA-Яа-яЁё ]+$/i,
                  message: 'The entered data is incorrect',
                },
              }),
            }}
            isError={errors.name !== undefined ? true : errors.name}
          />
          {/* Только после того как нагородил это, узнал про yup.... */}
          {errors.name && <span className="auth-form__error">{errors.name.message}</span>}
        </div>
        <div className="auth-form__password">
          <FormField
            type="password"
            placeholder="Input password"
            forHtml="password"
            id="password"
            text="Password"
            InputValidator={{
              ...register('pass', {
                required: { value: true, message: 'This is field required' },
                minLength: { value: 4, message: 'Please enter more than 4 characters' },
                maxLength: { value: 25, message: 'Max length exceeded' },
              }),
            }}
            isError={errors.pass !== undefined ? true : errors.pass}
          />
          {errors.pass && <span className="auth-form__error">{errors.pass.message}</span>}
        </div>
        <div className="auth-form__captcha">
          <Captcha
            InputValidator={{
              ...register('captcha', {
                required: { value: true, message: 'This is field required' },
              }),
            }}
          />
          <span className="auth-form__error">{errors.captcha?.message}</span>
        </div>
        <div className="auth-form__buttons">
          <Button type="submit" appointment="log" disabled={false} text="Log In" />
          <Button
            type="submit"
            appointment="reg"
            disabled={false}
            text="Registration"
            onClick={() => setLogin(true)}
          />
        </div>
      </form>
    </div>
  );
};
