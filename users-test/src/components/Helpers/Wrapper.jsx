import React from 'react';
import PropTypes from 'prop-types';

const Wrapper = ({ children }) => {
  return children;
};

Wrapper.propTypes = { children: PropTypes.node.isRequired };

export { Wrapper };
