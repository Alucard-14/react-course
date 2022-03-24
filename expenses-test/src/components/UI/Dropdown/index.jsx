import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ label, options, selected, onFilterChange }) => {
  const handleSelectChange = ({ target: { value } }) => {
    onFilterChange(value);
  };

  return (
    <div className='text-white py-0 px-4'>
      <div className='flex w-full items-center justify-between my-4 mx-0'>
        <label className='font-bold mb-2'>{label}</label>
        <select
          className='py-2 px-12 font-bold rounded-md text-black'
          value={selected}
          onChange={handleSelectChange}>
          {options.map(({ value, label }) => (
            <option {...{ value }} key={`expense-dropdown-option-${value}`}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Dropdown;
