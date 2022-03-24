import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../UI/Input';
import { useState } from 'react/cjs/react.development';
import formFields from '../../../data/newExpenseFormFields.json';
import { FormButton } from '../../UI/Button';

const ExpenseForm = ({ onSaveExpenseData }) => {
  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: '',
  });
  const [activeButton, setActiveButton] = useState(true);

  const handleInputChange = ({ target: { value } }, key) => {
    setUserInput((input) => ({ ...input, [key]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const expenseData = userInput;
    expenseData.amount = parseFloat(expenseData.amount);
    expenseData.date = new Date(expenseData.date ? expenseData.date : null);

    setUserInput((inputs) =>
      Object.keys(inputs).reduce((acc, key) => ({ ...acc, [key]: '' }), {}),
    );
    onSaveExpenseData(expenseData);
  };
  const handleActive = () => {
    setActiveButton(false);
  };
  const handleCancel = () => {
    setActiveButton(true);
  };

  if (activeButton) {
    return <FormButton label='Add New Expense' onClick={handleActive} />;
  }

  return (
    <form action='' onSubmit={handleSubmit}>
      <div className='flex flex-wrap gap-4 mb-4 text-left'>
        {formFields.map(({ label, ...props }) => (
          <Input
            {...{ label, ...props }}
            key={`Expense-form-input-field-${label}`}
            value={userInput[label.toLowerCase()]}
            onChange={(e) => handleInputChange(e, label.toLowerCase())}
          />
        ))}
      </div>
      <div className='text-right'>
        <FormButton label='Cancel' onClick={handleCancel} />
        <FormButton label='Add Expense' type='submit' />
      </div>
    </form>
  );
};

ExpenseForm.propTypes = { onSaveExpenseData: PropTypes.func.isRequired };

export default ExpenseForm;
