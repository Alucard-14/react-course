import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function ChartBar({ label, value, maxValue }) {
  let barFillHeight = '0%';

  if (value > 0) barFillHeight = `${Math.round((value / maxValue) * 100)}%`;

  return (
    <div className='h-full flex flex-col items-center'>
      <div className='h-full w-full border border-solid border-[#313131] rounded-xl bg-[#c3b4f3] overflow-hidden flex flex-col justify-end'>
        <div
          className={classNames(
            'bg-[#4826b9] w-full transition-all duration-300 ease-out',
            { height: barFillHeight },
          )}></div>
        <div className='font-bold text-[0.5rem] text-center'>{label}</div>
      </div>
    </div>
  );
}

ChartBar.propTypes = {};

export default ChartBar;
