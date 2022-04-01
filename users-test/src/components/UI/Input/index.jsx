import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({ id, label, inputRef, type = 'text' }) => {
  return (
    <>
      <label className='block font-bold mb-2' htmlFor={id}>
        {label}
      </label>
      <input
        className='block w-full border border-solid border-[color:#ccc] p-[0.15rem] mb-2 focus:outline-none focus:border-[color:#4f005f]'
        ref={inputRef}
        {...{ id, type }}
      />
    </>
  );
};

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  inputRef: PropTypes.object,
};

export default FormInput;
