import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Loop } from '@material-ui/icons';
import { Grid } from '@material-ui/core';

import { operations } from './duck';
import LibraryListItem from './LibraryListItem';
import useGlobalStyles from '../shared/styles';

const LibrariesList = () => {
  const { getLibraries } = operations;
  const dispatch = useDispatch();
  const { flexGrow } = useGlobalStyles();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getLibraries());
    };
    fetchData();
  }, []);

  const { isLoading, libraries } = useSelector(
    (store) => ({
      isLoading: store.libraries.isLoading,
      libraries: store.libraries.libraries,
    }),
    shallowEqual,
  );

  if (isLoading) {
    return <Loop />;
  }

  return (
    <div className={flexGrow}>
      <Grid container spacing={3}>
        {libraries.map((library) => {
          const { id } = library;
          return (
            <Grid item key={id}>
              <LibraryListItem key={id} library={library} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default LibrariesList;
