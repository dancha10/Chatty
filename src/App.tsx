import React from 'react';
import logo from './logo.svg';
import './styles/index.scss';
import './App.css';
import Title from './components/atoms/title/title';
import SubTitle from './components/atoms/subTitle/subTitle';
import NameMessageList from './components/atoms/NameMessageList/NameMessageList';
import NameDialog from './components/atoms/NameDialog/NameDialog';
import InputForm from './components/molecules/InputForm/InputForm';
import Button from './components/atoms/button/button';
import Logo from './components/atoms/logo/logo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title mainText="Демонстрация" secondText="UI-" thirdText="KIT'a" />
        <NameMessageList name="Marina Joe" />
        <NameDialog name="Marina Joe" />
        <Logo />
        <Title mainText="Welcome to" secondText="Chatty" thirdText="!" />
        <br />
        <SubTitle text="Please, autorize yourself" />
        <br />
        <InputForm placeholder="Input user name" forHtml="name" id="name" text="User name" />
        <br />
        <InputForm
          type="password"
          placeholder="Input password"
          forHtml="pass"
          id="pass"
          text="Password"
          isError
        />
        <br />
        <Button type="submit" disabled={false} onClick={() => {}} text="Log In" />
        <br />
        <Button type="submit" disabled onClick={() => {}} text="Log In" />
      </header>
    </div>
  );
}

export default App;
