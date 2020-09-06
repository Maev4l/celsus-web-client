import React from 'react';

import { connect } from 'react-redux';
import { Menu, Button } from 'semantic-ui-react';

import * as action from '../../../authn/actions';

import './style.scss';

const NavHeaderBar = ({ history, signOut }) => {
  const handleSignOut = () => {
    signOut().then(() => history.push('/sign-in'));
  };

  return (
    <Menu borderless className="navigation-header-bar">
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

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(action.signOut()),
});

export default connect(null, mapDispatchToProps)(NavHeaderBar);
