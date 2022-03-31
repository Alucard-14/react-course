import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';
import Button from '../Button';

import modalStyle from './Modal.module.css';

const Modal = ({ title, message, type = 'basic', onConfirm }) => {
  const cssTypeClass = type !== 'basic' && modalStyle[type];
  const modalClass = `fixed top-[30vh] left-[10%] w-[80%] z-[100] overflow-hidden md:left-[calc(50%-20rem)] md:w-[40rem] ${cssTypeClass}`;

  return (
    <>
      <div
        className='fixed top-0 left-0 w-full h-screen z-10 bg-[rgba(0,0,0,0.75)]'
        onClick={onConfirm}
      />
      <Card className={modalClass}>
        <header className='bg-[#4f005f] p-4'>
          <h2 className='m-0 text-white'>{title}</h2>
        </header>
        <div className='p-4'>
          <p>{message}</p>
        </div>
        <footer className='p-4 flex justify-end'>
          <Button onClick={onConfirm}>Ok</Button>
        </footer>
      </Card>
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
