import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';
import Button from '../Button';

const Card = ({ title, buttonLabel, onClick }) => {
  const handleClickCardButton = () => {
    onClick();
  };

  return (
    <div className='card'>
      <h2 className='title-h1'>{title}</h2>
      <div className='actions'>
        <Button label={buttonLabel} onClick={handleClickCardButton} />
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Card;
