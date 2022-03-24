import { useState } from 'react';
import PropTypes from 'prop-types';

import ExpenseItem from './ExpenseItem';

import Card from '../UI/Card';
import Dropdown from '../UI/Dropdown';

import dropOpts from '../../data/expensesDropdownOpts.json';

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const [filteredExpenses, setFilteredExpenses] = useState(
    expenses.filter(
      ({ date }) => date.getFullYear() === parseInt(filteredYear),
    ),
  );

  const handleFilterChange = (selectedYear) => {
    setFilteredYear(selectedYear);
    setFilteredExpenses(
      expenses.filter(
        ({ date }) => date.getFullYear() === parseInt(selectedYear),
      ),
    );
  };

  return (
    <Card className='p-4 bg-[#1f1f1f] my-8 mx-auto w-[50rem] max-w-[95%]'>
      <Dropdown
        label='Filter by year'
        options={dropOpts}
        selected={filteredYear}
        onFilterChange={handleFilterChange}
      />
      {filteredExpenses.map(({ id, ...props }) => (
        <ExpenseItem key={`expense-item-${id}`} {...props} />
      ))}
    </Card>
  );
};

Expenses.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
    }).isRequired,
  ).isRequired,
};

export default Expenses;
