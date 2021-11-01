import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { FormField } from '../../molecules/FormField';
import { Button } from '../../atoms/Button';
import { SCREENS } from '../../../routes/endpoints';
import './style.scss';

type InputValidatorType = {
  name: string;
  pass: string;
};

export const AuthForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputValidatorType>();
  const history = useHistory();
  const onSubmit: SubmitHandler<InputValidatorType> = data => {
    history.push(SCREENS.SCREENS__MESSENGER);
    console.log(data);
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
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
              pattern: { value: /^[A-Za-zA-Яа-яЁё ]+$/i, message: 'The entered data is incorrect' },
            }),
          }}
          isError={errors.name && true}
        />
        {/* Только после того как нагородил это, узнал про yup.... */}
        {errors.name && <span className="auth-form__error">{errors.name.message}</span>}
      </div>
      <div className="auth-form__password">
        <FormField
          type="password"
          placeholder="Input password"
          forHtml="pass"
          id="pass"
          text="Password"
          InputValidator={{
            ...register('pass', {
              required: { value: true, message: 'This is field required' },
              minLength: { value: 4, message: 'Please enter more than 4 characters' },
              maxLength: { value: 25, message: 'Max length exceeded' },
            }),
          }}
          isError={errors.pass && true}
        />
        {errors.pass && <span className="auth-form__error">{errors.pass.message}</span>}
      </div>
      <Button type="submit" disabled={false} onClick={() => {}} text="Log In" />
    </form>
  );
};
