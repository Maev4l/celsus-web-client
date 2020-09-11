import React, { Suspense } from 'react';
import clsx from 'clsx';
import { CssBaseline, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import NavSideBar from './NavSideBar';
import NavHeaderBar from './NavHeaderBar';
import useGlobalStyles from '../styles';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
  },
  toolbar: theme.mixins.toolbar,
}));

const Layout = ({ children }) => {
  const { flex, p2 } = useGlobalStyles();
  const { content, toolbar } = useStyles();

  return (
    <div className={flex}>
      <CssBaseline />
      <NavHeaderBar />

      <NavSideBar />

      <main className={clsx(content, p2)}>
        <div className={toolbar} />
        <Suspense fallback={<CircularProgress color="primary" />}>
          <div>{children}</div>
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
