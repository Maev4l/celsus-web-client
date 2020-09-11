import React from 'react';
import clsx from 'clsx';
import { Drawer, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useLocation } from 'react-router-dom';

import { sideBarWidth } from './utils';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: sideBarWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: sideBarWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerContainer: {
    overflow: 'auto',
  },
}));

const NavSideBar = () => {
  const { drawer, drawerPaper, toolbar, drawerContainer } = useStyles();
  const { pathname } = useLocation();

  return (
    <Drawer
      className={drawer}
      variant="permanent"
      classes={{
        paper: drawerPaper,
      }}
    >
      <div className={clsx(toolbar, drawerContainer)}>
        <ListItem button selected={pathname === '/'} component={Link} to="/">
          <ListItemText>Home</ListItemText>
        </ListItem>
        <ListItem
          button
          selected={pathname.startsWith('/libraries')}
          component={Link}
          to="/libraries"
        >
          <ListItemText>Libraries</ListItemText>
        </ListItem>
        <ListItem
          button
          selected={pathname.startsWith('/contacts')}
          component={Link}
          to="/contacts"
        >
          <ListItemText>Contacts</ListItemText>
        </ListItem>
      </div>
    </Drawer>
  );
};

export default NavSideBar;
