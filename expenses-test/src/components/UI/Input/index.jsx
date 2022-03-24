import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ label, type, value, onChange, min, max, step }) => {
  return (
    <div>
      <label className='font-bold mb-2 block'>{label}</label>
      <input
        {...{ type, onChange, value, min, max, step }}
        className='p-2 rounded-md border border-solid border-[#ccc] w-80 max-w-full'
      />
    </div>
  );
};

const mustHaveIfType = ({ type, min }) => {
  if ((type === 'number' || type === 'date') && typeof min !== 'string')
    return new Error('You must have a min value (string)');
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  onChange: PropTypes.func,
  min: mustHaveIfType,
  max: mustHaveIfType,
  step: mustHaveIfType,
};

export default Input;
