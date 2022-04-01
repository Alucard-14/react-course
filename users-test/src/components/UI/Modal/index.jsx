import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

import Backdrop from './Backdrop';
import Overlay from './Overlay';

const Modal = ({ title, message, type = 'basic', onConfirm }) => {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop onClick={onConfirm} />,
        document.getElementById('backdrop-root'),
      )}
      {ReactDom.createPortal(
        <Overlay {...{ title, message, type, onConfirm }} />,
        document.getElementById('overlay-root'),
      )}
    </>
  );
};

Modal.propTypes = {
  type: PropTypes.oneOf(['basic', 'error']).isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onConfirm: PropTypes.func,
};

export default Modal;
