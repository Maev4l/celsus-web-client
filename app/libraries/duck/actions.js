import types from './types';

const { GET_LIBRARIES, GET_LIBRARIES_SUCCESS, GET_LIBRARIES_ERROR } = types;

const fetchingLibraries = () => ({ type: GET_LIBRARIES });
const fetchLibrariesSucceeded = ({ data }) => ({ type: GET_LIBRARIES_SUCCESS, result: data });
const fetchLibrariesFailed = (error) => ({ type: GET_LIBRARIES_ERROR, error });

export default {
  fetchingLibraries,
  fetchLibrariesSucceeded,
  fetchLibrariesFailed,
};
