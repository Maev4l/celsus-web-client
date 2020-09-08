import React from 'react';
import clsx from 'clsx';
import { Modal, Button, Slide } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import useGlobalStyles from '../styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: theme.spacing(50),
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const SimpleModal = ({ header, message, open, onConfirm, onCancel }) => {
  const { paper } = useStyles();
  const { flex, flexContentEnd } = useGlobalStyles();
  const body = (
    <div
      className={paper}
      style={{
        top: '25%',
        margin: 'auto',
      }}
    >
      <h2>{header}</h2>
      <p>{message}</p>
      {(onConfirm || onConfirm) && (
        <div className={clsx(flex, flexContentEnd)}>
          {onConfirm && <Button onClick={onConfirm}>Yes</Button>}
          {onCancel && <Button onClick={onCancel}>No</Button>}
        </div>
      )}
    </div>
  );
  return (
    <Modal open={open} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Slide direction="up" in={open} mountOnEnter unmountOnExit>
        {body}
      </Slide>
    </Modal>
  );
};

export default SimpleModal;
