/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Sidebar } from 'semantic-ui-react';

import NavSideBar from './NavSideBar';

const Layout = ({ component: Component, ...rest }) => {
  const { path } = rest;

  return (
    <div>
      <NavSideBar path={path} />
      <Sidebar.Pusher>
        <Component {...rest} />
      </Sidebar.Pusher>
    </div>
  );
};

export default Layout;
