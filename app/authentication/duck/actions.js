import types from './types';

const {
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  SIGN_OUT,
  SIGN_OUT_ERROR,
  SIGN_OUT_SUCCESS,
} = types;

const authenticating = () => ({
  type: SIGN_IN,
});

const authenticationSucceeded = () => ({ type: SIGN_IN_SUCCESS });

const authenticationFailed = (error) => ({ type: SIGN_IN_ERROR, error });

const disconnecting = () => ({ type: SIGN_OUT });

const disconnectionSucceeded = () => ({ type: SIGN_OUT_SUCCESS });

const disconnectionFailed = (error) => ({ type: SIGN_OUT_ERROR, error });

export default {
  authenticating,
  authenticationSucceeded,
  authenticationFailed,
  disconnecting,
  disconnectionSucceeded,
  disconnectionFailed,
};
