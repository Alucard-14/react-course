import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FormInput from '../../UI/Form/Input';

import addUserProps from '../../../data/addUserObjectsProps.json';
import Button from '../../UI/Button';

const defaultInputValues = { username: '', age: '' };

const AddUser = (props) => {
  const [inputValues, setInputValues] = useState(defaultInputValues);

  const handleAddUser = (e) => {
    e.preventDefault();

    const { username, age } = inputValues;

    if (username.trim().length !== 0 && age.trim().length !== 0 && +age >= 1)
      setInputValues(defaultInputValues);
  };

  const handleChangeInput = ({ target: { value } }, field) => {
    setInputValues((prevInputValue) => ({ ...prevInputValue, [field]: value }));
  };

  return (
    <form onSubmit={handleAddUser}>
      {addUserProps.map((inputProps) => (
        <FormInput
          {...inputProps}
          key={`add-user-form-input-${inputProps.id}`}
          value={inputValues[inputProps.id]}
          onChange={(e) => handleChangeInput(e, inputProps.id)}
        />
      ))}
      <Button type='submit'>Add User</Button>
    </form>
  );
};

AddUser.propTypes = {};

export default AddUser;
