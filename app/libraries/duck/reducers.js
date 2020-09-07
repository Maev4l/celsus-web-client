import types from './types';

const { GET_LIBRARIES, GET_LIBRARIES_SUCCESS, GET_LIBRARIES_ERROR } = types;

const INITIAL_STATE = {
  isLoading: false,
  libraries: [],
  error: null,
};

const libraries = (state = INITIAL_STATE, action) => {
  const { type } = action;
  switch (type) {
    case GET_LIBRARIES:
      return { isLoading: true, ...state };
    case GET_LIBRARIES_SUCCESS: {
      const { result } = action;
      return {
        ...state,
        isLoading: false,
        libraries: result.libraries,
      };
    }

    case GET_LIBRARIES_ERROR: {
      const { error } = action;
      return {
        ...state,
        isLoading: false,
        error,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default libraries;
