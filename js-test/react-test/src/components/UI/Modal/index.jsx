import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

import './Modal.css';

const Modal = ({ onClick }) => {
  return (
    <div>
      <div className='backdrop' />
      <div className='modal'>
        <p>Holiwis.</p>
        <Button className='btn--alt' label='Cancelar' onClick={onClick} />
        <Button label='Confirmar' onClick={onClick} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClick: PropTypes.func,
};

export default Modal;
