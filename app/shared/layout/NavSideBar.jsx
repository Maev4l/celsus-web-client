import React from 'react';
import clsx from 'clsx';
import { Drawer, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

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

const NavSideBar = ({ path }) => {
  const { drawer, drawerPaper, toolBar, drawerContainer } = useStyles();
  return (
    <Drawer
      className={drawer}
      variant="permanent"
      classes={{
        paper: drawerPaper,
      }}
    >
      <div className={clsx(toolBar, drawerContainer)}>
        <ListItem button selected={path === '/'} component={Link} to="/">
          <ListItemText>Home</ListItemText>
        </ListItem>
        <ListItem button selected={path === '/libraries'} component={Link} to="/libraries">
          <ListItemText>Libraries</ListItemText>
        </ListItem>
        <ListItem button selected={path === '/contacts'} component={Link} to="/contacts">
          <ListItemText>Contacts</ListItemText>
        </ListItem>
      </div>
    </Drawer>
  );
};

export default NavSideBar;
