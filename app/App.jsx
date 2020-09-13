import React from 'react';

import { hot } from 'react-hot-loader';

import Routes from './Routes';
import { NotificationsManager } from './shared/notifications';

const App = () => {
  return (
    <NotificationsManager>
      <Routes />
    </NotificationsManager>
  );
};

export default hot(module)(App);
