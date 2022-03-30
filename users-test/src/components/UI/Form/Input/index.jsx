import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({ id, label, type = 'text' }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input {...{ id, type }} />
    </div>
  );
};

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
};

export default FormInput;
