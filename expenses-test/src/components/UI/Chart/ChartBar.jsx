import React from 'react';
import PropTypes from 'prop-types';

function ChartBar({ label, value, maxValue }) {
  let barFillHeight = '0%';

  if (maxValue > 0) barFillHeight = `${Math.round((value / maxValue) * 100)}%`;

  return (
    <div className='h-full flex flex-col items-center'>
      <div className='h-full w-full border border-solid border-[#313131] rounded-xl bg-[#c3b4f3] overflow-hidden flex flex-col justify-end'>
        <div
          className='bg-[#4826b9] w-full transition-all duration-300 ease-out'
          style={{ height: barFillHeight }}></div>
      </div>
      <div className='font-bold text-[0.5rem] text-center'>{label}</div>
    </div>
  );
}

ChartBar.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number.isRequired,
  maxValue: PropTypes.number,
};

export default ChartBar;
