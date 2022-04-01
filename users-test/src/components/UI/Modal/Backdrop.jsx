import React from 'react';
import PropTypes from 'prop-types';

const Backdrop = ({ onClick }) => {
  return (
    <div
      {...{ onClick }}
      className='fixed top-0 left-0 w-full h-screen z-10 bg-[rgba(0,0,0,0.75)]'
    />
  );
};

Backdrop.propTypes = { onClick: PropTypes.func };

export default Backdrop;
