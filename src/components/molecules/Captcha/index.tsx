import React, { useEffect, useState } from 'react';
import Reset from '../../../img/reset.svg';
import './style.scss';
import { Label } from '../../atoms/Label';
import { Input, InputType } from '../../atoms/Input';

type CaptchaType = Pick<InputType, 'InputValidator'>;

export const Captcha: React.FC<CaptchaType> = ({ InputValidator }) => {
  const [captcha, setCaptcha] = useState<string>('');
  useEffect(() => {
    fetch('http://109.194.37.212:93/api/auth/captcha').then(response => setCaptcha(response.url));
  }, [captcha]);

  return (
    <div className="captcha">
      <div className="captcha__input">
        <Label text="Security code" />
        <Input placeholder="Security code" InputValidator={InputValidator} />
      </div>
      <div className="captcha__output">
        <div className="captcha__wrapper">
          <img className="captcha__img" src={captcha} alt="captcha" />
        </div>
        <button className="captcha__btn" onClick={() => setCaptcha('reset')} type="button">
          <img src={Reset} alt="reset" />
        </button>
      </div>
    </div>
  );
};
