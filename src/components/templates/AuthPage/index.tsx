import React from 'react';
import { Logo } from '../../atoms/Logo';
import { AuthForm } from '../../organisms/AuthForm';
import './style.scss';
import Main from '../../../img/main.png';
import Corner from '../../../img/Angle.svg';
import Stick from '../../../img/CircleWithStick.svg';
import Cross from '../../../img/Cross.svg';

export const AuthPage = () => {
  return (
    <div className="auth-page">
      <div className="auth-page__container">
        <div className="auth-page__login-side">
          <div className="auth-page__greetings">
            <Logo />
            <h1 className="auth-page__title">
              Welcome to <span className="auth-page__title--blue">Chatty</span>
              <span className="auth-page__title--light">!</span>
            </h1>
            <h2 className="auth-page__subtitle">Please, autorize yourself</h2>
          </div>
          <AuthForm />
        </div>
        <div className="auth-page__decoration-side side-decoration">
          <img src={Main} alt="Main-Bottom" className="side-decoration__main-decoration" />
          <img src={Corner} alt="Corner-right" className="side-decoration__corner" />
          <div className="side-decoration__circle _circle--extra-thick" />
          <div className="side-decoration__circle _circle--large" />
          <div className="side-decoration__circle _circle--small _position-first" />
          <div className="side-decoration__circle _circle--small _position-second" />
          <div className="side-decoration__circle _circle--medium" />
          <img src={Cross} alt="Cross" className="side-decoration__cross" />
          <img src={Stick} alt="Circle with Stick" className="side-decoration__circle-stick" />
          <div className="side-decoration__dots dots-decoration">
            <div className="dots-decoration__row">
              <div className="dots-decoration__dot" />
              <div className="dots-decoration__dot" />
              <div className="dots-decoration__dot" />
              <div className="dots-decoration__dot" />
            </div>
            <div className="dots-decoration__row">
              <div className="dots-decoration__dot" />
              <div className="dots-decoration__dot" />
              <div className="dots-decoration__dot" />
              <div className="dots-decoration__dot" />
            </div>
          </div>
          <div className="side-decoration__circle _circle--dot" />
        </div>
      </div>
    </div>
  );
};
