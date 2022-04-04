import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = ({ className, label, onClick }) => {
  const newClassName = `btn ${className}`;

  return (
    <button {...{ onClick }} className={newClassName}>
      {label}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
