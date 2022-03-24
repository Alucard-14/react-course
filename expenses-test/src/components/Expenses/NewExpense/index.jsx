import React from 'react';
import PropTypes from 'prop-types';

import Card from '../../UI/Card';
import ExpenseForm from '../ExpenseForm';

const NewExpense = ({ onAddExpense }) => {
  const handleSaveExpenseData = (expenseData) => {
    const newExpenseData = {
      ...expenseData,
      id: `e${Math.random().toString()}`,
    };

    onAddExpense(newExpenseData);
  };

  return (
    <Card className='bg-[#a892ee] p-4 my-8 mx-auto w-[50rem] max-w-[95%] text-center'>
      <ExpenseForm onSaveExpenseData={handleSaveExpenseData} />
    </Card>
  );
};

NewExpense.propTypes = { onAddExpense: PropTypes.func.isRequired };

export default NewExpense;
