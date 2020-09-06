import React from 'react';

import { Link } from 'react-router-dom';
import { Menu, Sidebar } from 'semantic-ui-react';

const NavSideBar = ({ path }) => (
  <Sidebar as={Menu} animation="overlay" width="thin" visible icon="labeled" vertical inverted>
    <Menu.Item name="home" active={path === '/'} as={Link} to="/">
      Home
    </Menu.Item>
    <Menu.Item name="libraries" active={path === '/libraries'} as={Link} to="/libraries">
      Libraries
    </Menu.Item>
    <Menu.Item name="suggestions" active={path === '/suggestions'} as={Link} to="/suggestions">
      Suggestions
    </Menu.Item>
    <Menu.Item name="books" active={path === '/books'} as={Link} to="/books">
      Books
    </Menu.Item>
    <Menu.Item name="contacts" active={path === '/contacts'} as={Link} to="/contacts">
      Contacts
    </Menu.Item>
  </Sidebar>
);

export default NavSideBar;
