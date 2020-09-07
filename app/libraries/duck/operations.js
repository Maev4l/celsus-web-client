import { graphql } from '../../shared/api-client';
import actions from './actions';
import { ListLibraries } from './queries';

const { fetchingLibraries, fetchLibrariesSucceeded, fetchLibrariesFailed } = actions;

const getLibraries = () => async (dispatch) => {
  dispatch(fetchingLibraries());
  try {
    const data = await graphql(ListLibraries);
    dispatch(fetchLibrariesSucceeded(data));
  } catch (e) {
    dispatch(fetchLibrariesFailed(e));
  }
};

export default {
  getLibraries,
};
