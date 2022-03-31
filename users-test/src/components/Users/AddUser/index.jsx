import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FormInput from '../../UI/Input';

import addUserProps from '../../../data/addUserObjectsProps.json';
import Button from '../../UI/Button';

import defaultInputValues from '../../../data/defaultInputUserValues.json';
import Card from '../../UI/Card';
import Modal from '../../UI/Modal';

const AddUser = ({ onAddUser }) => {
  const [inputValues, setInputValues] = useState(defaultInputValues);
  const [error, setError] = useState();

  const handleAddUser = (e) => {
    e.preventDefault();

    const { username, age } = inputValues;

    if (username.trim().length !== 0 && age.trim().length !== 0 && +age >= 1) {
      onAddUser(inputValues);
      setInputValues(defaultInputValues);
    } else if (username.trim().length === 0 || age.trim().length === 0)
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
    else
      setError({
        title: 'Invalid Age',
        message: 'Please enter a valid age (> 0).',
      });
  };

  const handleChangeInput = ({ target: { value } }, field) => {
    setInputValues((prevInputValue) => ({ ...prevInputValue, [field]: value }));
  };

  const handleModalCancelClick = () => {
    setError(null);
  };

  return (
    <Card className='my-8 mx-auto p-4 w-[90%] max-w-[40rem]'>
      {error && (
        <Modal {...error} type='error' onConfirm={handleModalCancelClick} />
      )}
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
    </Card>
  );
};

AddUser.propTypes = { onAddUser: PropTypes.func };

export default AddUser;
