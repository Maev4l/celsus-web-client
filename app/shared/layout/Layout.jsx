/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Sidebar } from 'semantic-ui-react';

import NavSideBar from './NavSideBar';
import NavHeaderBar from './NavHeaderBar';

const Layout = ({ component: Component, ...rest }) => {
  const { path } = rest;

  return (
    <div>
      <NavSideBar path={path} />
      <Sidebar.Pusher>
        <div css={{ marginLeft: '150px' }}>
          <NavHeaderBar />
          <Component {...rest} />
        </div>
      </Sidebar.Pusher>
    </div>
  );
};

export default Layout;
