import React from 'react';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useSelector, useDispatch } from 'react-redux';

import { operations } from './duck';

const NotificationsManager = ({ children }) => {
  const dispatch = useDispatch();
  const { notifications } = useSelector((store) => ({
    notifications: store.notifications.notifications,
  }));

  const { dismiss } = operations;

  const handleClose = (event, reason, id) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(dismiss(id));
  };

  const showNotification = () => {
    const [notification] = notifications;
    const { id, type, message } = notification;
    return (
      <Snackbar
        open
        autoHideDuration={6000}
        onClose={(event, reason) => handleClose(event, reason, id)}
        anchorOrigin={{
          horizontal: 'center',
          vertical: 'top',
        }}
      >
        <Alert severity={type} onClose={(event, reason) => handleClose(event, reason, id)}>
          {message}
        </Alert>
      </Snackbar>
    );
  };

  return (
    <>
      {notifications.length !== 0 && showNotification()}
      {children}
    </>
  );
};

export default NotificationsManager;
