import React from 'react';
import PropTypes from 'prop-types';
import Chart from '../../UI/Chart';

const ExpensesChart = ({ expenses }) => {
  const chartDataPoints = [
    {
      label: 'Jan',
      value: 0,
    },
    {
      label: 'Feb',
      value: 0,
    },
    {
      label: 'Mar',
      value: 0,
    },
    {
      label: 'Apr',
      value: 0,
    },
    {
      label: 'May',
      value: 0,
    },
    {
      label: 'Jun',
      value: 0,
    },
    {
      label: 'Jul',
      value: 0,
    },
    {
      label: 'Ago',
      value: 0,
    },
    {
      label: 'Sep',
      value: 0,
    },
    {
      label: 'Oct',
      value: 0,
    },
    {
      label: 'Nov',
      value: 0,
    },
    {
      label: 'Dec',
      value: 0,
    },
  ];

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
