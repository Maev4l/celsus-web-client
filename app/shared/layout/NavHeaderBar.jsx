import React from 'react';
import { Menu, Button } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';

import { operations } from '../../authentication/duck';

const NavHeaderBar = () => {
  const { signOut } = operations;

  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
  };

  return (
    <Menu
      borderless
      css={{
        borderWidth: '0px !important',
        borderRadius: '0px !important',
      }}
    >
      <Menu.Item>
        <div id="header-extra-menu" />
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>
          <Button icon="sign out" content="Logout" labelPosition="left" onClick={handleSignOut} />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default NavHeaderBar;
