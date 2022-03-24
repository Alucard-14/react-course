import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Card = ({ children, className }) => {
  const classes = classNames(
    'rounded-xl shadow-[0_1px_8px_rgba(0, 0, 0, 0.25)]',
    className,
  );

  return <div className={classes}>{children}</div>;
};

Card.propTypes = {};

export default Card;
