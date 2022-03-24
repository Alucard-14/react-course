import React, { useState } from 'react';

import Expenses from './components/Expenses';
import NewExpense from './components/Expenses/NewExpense';

import { expenses as firstExpenses } from './data/expenses';

function App() {
  const [expenses, setExpenses] = useState(firstExpenses);

  const handleAddExpense = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={handleAddExpense} />
      <Expenses {...{ expenses }} />
    </div>
  );
}

export default App;
