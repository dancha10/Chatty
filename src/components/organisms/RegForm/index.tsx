import React from 'react';
import './style.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { FormField } from '../../molecules/FormField';
import { Captcha } from '../../molecules/Captcha';
import { Button } from '../../atoms/Button';
import { Logo } from '../../atoms/Logo';
import { SelectField } from '../../molecules/SelectField';
import { FormType, InputValidatorType } from '../AuthForm';
import { SCREENS } from '../../../routes/endpoints';

const Genders: Array<'male' | 'female'> = ['male', 'female'];

interface RegisterFormType extends InputValidatorType {
  passwordConfirm: string;
  nickname: string;
  gender: string;
}

export const RegForm: React.FC<FormType> = ({ setLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormType>();
  const history = useHistory();
  const onSubmit: SubmitHandler<RegisterFormType> = data => {
    const RegistrationForm = new FormData();
    RegistrationForm.append('login', data.name);
    RegistrationForm.append('password', data.pass);
    RegistrationForm.append('password_confirm', data.passwordConfirm);
    RegistrationForm.append('name', data.nickname);
    RegistrationForm.append('captcha', data.captcha);
    fetch('http://109.194.37.212:93/api/auth/register', {
      method: 'POST',
      body: RegistrationForm,
    })
      .then(async res => {
        if (res.status === 400) {
          throw new Error(await res.text());
        }
        return res.json();
      })
      .then(() => setLogin(false))
      .catch(error => console.log(error));
  };

  return (
    <div className="registration-form">
      <div className="auth-page__greetings registration-form__greetings">
        <Logo />
        <h1 className="auth-page__title">
          Sign Up to <span className="auth-page__title--blue">Chatty</span>
          <span className="auth-page__title--light">!</span>
        </h1>
        <h2 className="auth-page__subtitle">Registration</h2>
      </div>
      <form className="registration-form__body" onSubmit={handleSubmit(onSubmit)}>
        <div className="registration-form__login">
          <FormField
            placeholder="Input user name"
            text="Create user name"
            forHtml="name"
            id="name"
            InputValidator={{
              ...register('name', {
                required: { value: true, message: 'This is field required' },
                minLength: { value: 2, message: 'Please enter more than 2 characters' },
                maxLength: { value: 50, message: 'Max length exceeded' },
                pattern: {
                  value: /^[A-Za-zA-Яа-яЁё ]+$/i,
                  message: 'The entered data is incorrect',
                },
              }),
            }}
            isError={errors.name !== undefined ? true : errors.name}
          />
          {errors.name && (
            <span className="registration-form__error-message">{errors.name?.message}</span>
          )}
        </div>
        <div className="registration-form__password">
          <FormField
            placeholder="Create password"
            text="Create password"
            forHtml="password"
            id="password"
            InputValidator={{
              ...register('pass', {
                required: { value: true, message: 'This is field required' },
                minLength: { value: 4, message: 'Please enter more than 4 characters' },
                maxLength: { value: 55, message: 'Max length exceeded' },
              }),
            }}
            isError={errors.pass !== undefined ? true : errors.pass}
          />
          {errors.pass && (
            <span className="registration-form__error-message">{errors.pass.message}</span>
          )}
        </div>
        <div className="registration-form__confirm-password">
          <FormField
            placeholder="Password confirmation"
            text="Password confirmation"
            forHtml="password-confirm"
            id="passwordConfirm"
            InputValidator={{
              ...register('passwordConfirm', {
                required: { value: true, message: 'This is field required' },
                minLength: { value: 4, message: 'Please enter more than 4 characters' },
                maxLength: { value: 55, message: 'Max length exceeded' },
              }),
            }}
            isError={errors.passwordConfirm !== undefined ? true : errors.passwordConfirm}
          />
          {errors.passwordConfirm && (
            <span className="registration-form__error-message">
              {errors.passwordConfirm.message}
            </span>
          )}
        </div>
        <div className="registration-form__nickname">
          <FormField
            placeholder="Nickname"
            text="Nickname"
            forHtml="nickname"
            id="nickname"
            InputValidator={{
              ...register('nickname', {
                required: { value: true, message: 'This is field required' },
                minLength: { value: 4, message: 'Please enter more than 4 characters' },
                maxLength: { value: 50, message: 'Max length exceeded' },
              }),
            }}
            isError={errors.nickname !== undefined ? true : errors.nickname}
          />
          {errors.nickname && (
            <span className="registration-form__error-message">{errors.nickname.message}</span>
          )}
        </div>
        <div className="registration-form__gender">
          <SelectField
            options={Genders}
            DropdownValidator={{
              ...register('gender', {
                required: { value: true, message: 'This is field required' },
              }),
            }}
            isError={errors.nickname !== undefined ? true : errors.nickname}
          />
          {errors.gender && (
            <span className="registration-form__error-message">{errors.gender.message}</span>
          )}
        </div>
        <div className="registration-form__captcha">
          <Captcha
            InputValidator={{
              ...register('captcha', {
                required: { value: true, message: 'This is field required' },
              }),
            }}
          />
          <span className="registration-form__error-message">{errors.captcha?.message}</span>
        </div>
        <div className="registration-form__buttons">
          <Button type="submit" appointment="log" disabled={false} text="Registration" />
          <Button
            type="button"
            appointment="reg"
            disabled={false}
            text="Log In"
            onClick={() => setLogin(false)}
          />
        </div>
      </form>
    </div>
  );
};
