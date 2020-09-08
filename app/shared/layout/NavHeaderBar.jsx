import React from 'react';
import clsx from 'clsx';
import { AppBar, Toolbar, Box, Typography, Button } from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';

import { operations } from '../../authentication/duck';
import { sideBarWidth } from './utils';
import useGlobalStyles from '../styles';

const useStyles = makeStyles({
  appBar: {
    width: `calc(100% - ${sideBarWidth}px)`,
    marginLeft: sideBarWidth,
  },
  container: {
    flexGrow: 1,
  },
});

const NavHeaderBar = () => {
  const { signOut } = operations;

  const dispatch = useDispatch();

  const { appBar, container } = useStyles();
  const { flex, flexContentBetween } = useGlobalStyles();

  const handleSignOut = () => {
    dispatch(signOut());
  };

  return (
    <AppBar position="fixed" className={appBar} color="default">
      <Toolbar>
        <Box className={clsx(flex, flexContentBetween, container)}>
          <Box>
            <Typography variant="h6" noWrap>
              Celsus
            </Typography>
          </Box>
          <Box>
            <Button
              onClick={handleSignOut}
              color="primary"
              variant="outlined"
              startIcon={<ExitToApp />}
            >
              Logoff
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavHeaderBar;
