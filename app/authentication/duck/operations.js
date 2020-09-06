import { Auth } from 'aws-amplify';

import actions from './actions';

const {
  authenticating,
  authenticationSucceeded,
  authenticationFailed,
  disconnecting,
  disconnectionSucceeded,
  disconnectionFailed,
} = actions;

// eslint-disable-next-line import/prefer-default-export
const signIn = (username, password) => async (dispatch) => {
  dispatch(authenticating());
  try {
    await Auth.signIn(username, password);
    dispatch(authenticationSucceeded());
  } catch (e) {
    dispatch(authenticationFailed(e));
  }
};

const signOut = () => async (dispatch) => {
  dispatch(disconnecting());
  try {
    await Auth.signOut();
    dispatch(disconnectionSucceeded());
  } catch (e) {
    dispatch(disconnectionFailed(e));
  }
};

export default {
  signIn,
  signOut,
};
