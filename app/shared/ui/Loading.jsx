import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress, Backdrop } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

const Loading = ({ loading }) => {
  const { backdrop } = useStyles();
  return (
    <Backdrop open={loading} className={backdrop}>
      <CircularProgress color="primary" />
    </Backdrop>
  );
};

export default Loading;
