import React from 'react';
import PropTypes from 'prop-types';

const Page = ({ component: Component, children }) => {
  return (
    Component ? <Component>{children}</Component> : <div>{children}</div>
  );
};

Page.propTypes = {
  children: PropTypes.node,
};

export default Page;
