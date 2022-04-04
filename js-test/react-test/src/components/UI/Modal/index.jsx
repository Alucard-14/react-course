import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

import './Modal.css';

const Modal = (props) => {
  return (
    <div>
      <div className='backdrop' />
      <div className='modal'>
        <p>Holiwis.</p>
        <Button className='btn--alt' label='Cancelar' onClick={props.onClick} />
        <Button label='Confirmar' onClick={props.onClick} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  props: PropTypes.shape({
    onClick: PropTypes.func,
  }).isRequired,
};

export default Modal;
