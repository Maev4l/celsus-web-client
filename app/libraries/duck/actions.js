import types from './types';

const {
  GET_LIBRARIES,
  GET_LIBRARIES_SUCCESS,
  GET_LIBRARIES_ERROR,
  DELETE_LIBRARY,
  DELETE_LIBRARY_SUCCESS,
  DELETE_LIBRARY_ERROR,
} = types;

const fetchingLibraries = () => ({ type: GET_LIBRARIES });
const fetchLibrariesSucceeded = ({ data }) => ({ type: GET_LIBRARIES_SUCCESS, result: data });
const fetchLibrariesFailed = (error) => ({ type: GET_LIBRARIES_ERROR, error });

const deletingLibrary = () => ({ type: DELETE_LIBRARY });
const deleteLibrarySucceeded = () => ({ type: DELETE_LIBRARY_SUCCESS });
const deleteLibraryError = (error) => ({ type: DELETE_LIBRARY_ERROR, error });

export default {
  fetchingLibraries,
  fetchLibrariesSucceeded,
  fetchLibrariesFailed,

  deletingLibrary,
  deleteLibrarySucceeded,
  deleteLibraryError,
};
