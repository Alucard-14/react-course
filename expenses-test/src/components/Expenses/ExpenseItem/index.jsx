import React, { useState } from 'react';

import PropTypes from 'prop-types';
import Card from '../../UI/Card';
import ExpenseDate from '../ExpenseDate';

const ExpenseItem = ({ date = new Date(), title = '', amount = 0 }) => (
  <Card className='flex justify-between items-center p-2 my-4 mx-0 bg-neutral-gray'>
    <ExpenseDate {...{ date }} />
    <div className='flex flex-col-reverse gap-4 items-center justify-start flex-auto smartphone:flex-row smartphone:items-center'>
      <h2 className='text-base flex-auto my-0 mx-4 text-white smartphone:text-xl'>
        {title}
      </h2>
      <div className='text-base font-bold text-white bg-price-indigo border border-solid border-white p-2 rounded-xl smartphone:text-xl py-2 px-6'>
        ${amount}
      </div>
    </div>
  </Card>
);

ExpenseItem.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default ExpenseItem;
