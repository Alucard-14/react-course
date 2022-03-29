import React from 'react';
import PropTypes from 'prop-types';
import ChartBar from './ChartBar';

const Chart = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map(({ value }) => value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className='p-4 rounded-xl bg-[#f8dfff] text-center flex justify-around h-40'>
      {dataPoints.map(({ value, label }) => (
        <ChartBar
          {...{ value, label }}
          maxValue={totalMaximum}
          key={`chart-bar-${label}`}
        />
      ))}
    </div>
  );
};

Chart.propTypes = {
  dataPoints: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default Chart;
