import React, { FC } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Authentication } from '../page/Authentication/Authentication';
import { SCREENS } from './endpoints';
import ChatPage from '../page/ChatPage/ChatPage';

export const Routes: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={SCREENS.SCREENS__SIGN} component={Authentication} />

        <Route path={SCREENS.SCREENS__MESSENGER} component={ChatPage} />

        <Redirect to={SCREENS.SCREENS__SIGN} />
      </Switch>
    </BrowserRouter>
  );
};
