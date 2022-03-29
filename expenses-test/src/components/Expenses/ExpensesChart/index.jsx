import React from 'react';
import PropTypes from 'prop-types';

import Chart from '../../UI/Chart';

import chartDataPoints from '../../../data/chartDataPointsExample.json';

const ExpensesChart = ({ expenses }) => {
  for (const { date, amount } of expenses) {
    const expenseMonth = date.getMonth();
    chartDataPoints[expenseMonth].value += amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

ExpensesChart.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.instanceOf(Date),
      value: PropTypes.number,
    }).isRequired,
  ).isRequired,
};

export default ExpensesChart;
