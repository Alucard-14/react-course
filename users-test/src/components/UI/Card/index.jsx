import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ className, children }) => {
  const newClassName = `bg-white shadow-[0_2px_8px_rgba(0,0,0,0.26)] rounded-[10px] ${className}`;

  return <div className={newClassName}>{children}</div>;
};

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Card;
