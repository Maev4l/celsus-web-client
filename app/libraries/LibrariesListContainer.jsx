import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { operations } from './duck';

const LibrariesListContainer = () => {
  const { getLibraries } = operations;
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getLibraries());
    };
    fetchData();
  }, []);

  return <div>Libraries !</div>;
};

export default LibrariesListContainer;
