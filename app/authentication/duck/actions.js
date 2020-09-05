import types from './types';

const { SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_ERROR } = types;

const authenticating = () => ({
  type: SIGN_IN,
});

const authenticationSucceeded = () => ({ type: SIGN_IN_SUCCESS });

const authenticationFailed = (error) => ({ type: SIGN_IN_ERROR, error });

export default {
  authenticating,
  authenticationSucceeded,
  authenticationFailed,
};
