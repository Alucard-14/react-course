import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../UI/Input';
import { useState } from 'react/cjs/react.development';

const formFields = [
  {
    label: 'Title',
    type: 'text',
  },
  {
    label: 'Amount',
    type: 'number',
    min: '0.01',
    step: '0.01',
  },
  {
    label: 'Date',
    type: 'date',
    min: '2019-01-01',
    max: '2022-12-31',
  },
];

const ExpenseForm = ({ onSaveExpenseData }) => {
  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: '',
  });

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
        <button
          className='cursor-pointer py-4 px-8 border border-solid border-[#40005d] bg-[#40005d] text-white rounded-xl mr-4'
          type='submit'>
          Add Expense
        </button>
      </div>
    </form>
  );
};

ExpenseForm.propTypes = { onSaveExpenseData: PropTypes.func.isRequired };

export default ExpenseForm;
