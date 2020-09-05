import types from './types';

const {
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  SIGN_OUT,
  SIGN_OUT_ERROR,
  SIGN_OUT_SUCCESS,
} = types;

const INITIAL_STATE = {
  authenticated: false,
  authenticating: false,
  error: null,
};

const authn = (state = INITIAL_STATE, action) => {
  const { type } = action;
  switch (type) {
    case SIGN_IN:
      return { ...state, authenticated: false, authenticating: true };
    case SIGN_IN_SUCCESS:
      return { ...state, authenticated: true, authenticating: false };
    case SIGN_IN_ERROR: {
      const { error } = action;
      return {
        ...state,
        authenticated: false,
        authenticating: false,
        error,
      };
    }
    case SIGN_OUT:
    case SIGN_OUT_ERROR:
    case SIGN_OUT_SUCCESS: {
      return {
        ...state,
        authenticated: false,
        error: null,
      };
    }
    default:
      return { ...state };
  }
};

export default authn;
