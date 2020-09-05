import React from 'react';
import { render } from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import Amplify from 'aws-amplify';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import Routes from './Routes';
import rootReducer from './reducers';

Amplify.configure({
  Auth: {
    identityPoolId: process.env.IDENTITY_POOL_ID,
    userPoolId: process.env.USER_POOL_ID,
    region: process.env.REGION,
    userPoolWebClientId: process.env.USER_POOL_CLIENT_ID,
  },
  API: {
    graphql_endpoint: 'https://api-celsus.isnan.eu/graphql',
  },
});

const loggerMiddleware = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware));

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}
