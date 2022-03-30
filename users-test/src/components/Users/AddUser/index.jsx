import React from 'react';
import PropTypes from 'prop-types';

import FormInput from '../../UI/Form/Input';

import addUserProps from '../../../data/addUserObjectsProps.json';

const AddUser = (props) => {
  const handleAddUser = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleAddUser}>
      {addUserProps.map((inputProps) => (
        <FormInput
          key={`add-user-form-input-${inputProps.id}`}
          {...inputProps}
        />
      ))}
      <button type='submit'></button>
    </form>
  );
};

AddUser.propTypes = {};

export default AddUser;
