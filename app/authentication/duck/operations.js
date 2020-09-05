import { Auth } from 'aws-amplify';

import actions from './actions';

const { authenticating, authenticationSucceeded, authenticationFailed } = actions;

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

export default {
  signIn,
};
