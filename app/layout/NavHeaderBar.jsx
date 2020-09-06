import React from 'react';
import { Menu, Button } from 'semantic-ui-react';

// import * as action from '../../../authn/actions';

const NavHeaderBar = ({ history, signOut }) => {
  const handleSignOut = () => {
    signOut().then(() => history.push('/sign-in'));
  };

  return (
    <Menu
      borderless
      css={{
        'border-width': '0px !important',
        'border-radius': '0px !important',
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
