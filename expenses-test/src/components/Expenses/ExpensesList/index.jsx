import ExpenseItem from '../ExpenseItem';

const ExpensesList = ({ items }) => {
  if (items.length === 0) {
    return <h2 className='text-white text-center'>No expenses found.</h2>;
  }

  return (
    <ul className='list-none p-0'>
      {items.map(({ id, ...props }) => (
        <ExpenseItem key={`expense-item-${id}`} {...props} />
      ))}
    </ul>
  );
};

export default ExpensesList;

ExpensesList.propTypes = {};
