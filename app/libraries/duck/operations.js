import { graphql } from '../../shared/api-client';
import actions from './actions';
import { ListLibraries, DeleteLibrary } from './queries';

const {
  fetchingLibraries,
  fetchLibrariesSucceeded,
  fetchLibrariesFailed,
  deletingLibrary,
  deleteLibrarySucceeded,
  deleteLibraryError,
} = actions;

const getLibraries = () => async (dispatch) => {
  dispatch(fetchingLibraries());
  try {
    const data = await graphql(ListLibraries);
    dispatch(fetchLibrariesSucceeded(data));
  } catch (e) {
    dispatch(fetchLibrariesFailed(e));
  }
};

const deleteLibrary = (id) => async (dispatch) => {
  dispatch(deletingLibrary);
  try {
    await graphql(DeleteLibrary, { id });
    dispatch(deleteLibrarySucceeded());
  } catch (e) {
    const { errors } = e;
    if (errors) {
      const [error] = errors;
      dispatch(deleteLibraryError(error));
    }
  }
};

export default {
  getLibraries,
  deleteLibrary,
};
