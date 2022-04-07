import React from 'react';
import PropTypes from 'prop-types';

import classes from './Input.module.css';

const Input = ({
  className,
  id,
  type,
  label,
  value,
  isValid,
  onChange,
  onBlur,
}) => {
  const newClassName = `${classes.control} ${
    isValid === false && classes.invalid
  } ${className}`;

  return (
    <div className={newClassName}>
      <label htmlFor={id}>{label}</label>
      <input {...{ id, type, value, onChange, onBlur }} />
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isValid: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

export default Input;
