import React from 'react';
import { render } from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import Amplify from '@aws-amplify/core';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import App from './App';

import rootReducer from './reducers';

const loggerMiddleware = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware));

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

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
