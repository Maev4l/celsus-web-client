import { graphql } from '../../shared/api-client';
import actions from './actions';
import { ListLibraries, DeleteLibrary, AddLibrary } from './queries';

const {
  fetchingLibraries,
  fetchLibrariesSucceeded,
  fetchLibrariesFailed,
  deletingLibrary,
  deleteLibrarySucceeded,
  deleteLibraryFailed,
  addingLibrary,
  addLibrarySucceeded,
  addLibraryFailed,
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
      dispatch(deleteLibraryFailed(error));
    }
  }
};

const addLibrary = (library) => async (dispatch) => {
  dispatch(addingLibrary);
  try {
    await graphql(AddLibrary, { library });
    dispatch(addLibrarySucceeded());
  } catch (e) {
    const { errors } = e;
    if (errors) {
      const [error] = errors;
      dispatch(addLibraryFailed(error));
    }
  }
};

export default {
  getLibraries,
  deleteLibrary,
  addLibrary,
};
