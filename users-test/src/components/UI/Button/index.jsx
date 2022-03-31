import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, onClick, children, type = 'button' }) => {
  const buttonClass = `border border-solid border-[color:#4f005f] bg-[color:#4f005f] text-white py-1 px-4 cursor-pointer hover:bg-[#741188] active:bg-[#741188] hover:border-[color:#741188] active:border-[color:#741188] focus:outline-none ${className}`;

  return (
    <button {...{ type, onClick }} className={buttonClass}>
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
};

export default Button;
