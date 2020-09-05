import React from 'react';

const Layout = ({ component: Component, ...rest }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...rest} />;
};

export default Layout;
