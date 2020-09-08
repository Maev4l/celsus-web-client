/* eslint-disable react/jsx-props-no-spreading */
import React, { Suspense } from 'react';
import clsx from 'clsx';
import { CssBaseline, Toolbar, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import NavSideBar from './NavSideBar';
import NavHeaderBar from './NavHeaderBar';
import useGlobalStyles from '../styles';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
  },
}));

const Layout = ({ component: Component, ...rest }) => {
  const { path } = rest;

  const { flex } = useGlobalStyles();
  const { content } = useStyles();
  const { p2 } = useGlobalStyles();

  return (
    <div className={flex}>
      <CssBaseline />
      <NavHeaderBar />
      <Toolbar />
      <NavSideBar path={path} />

      <main className={clsx(content, p2)}>
        <Toolbar />
        <Suspense fallback={<CircularProgress color="primary" />}>
          <Component {...rest} />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
