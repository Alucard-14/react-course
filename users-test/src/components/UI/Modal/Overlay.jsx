import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';
import Button from '../Button';

import modalStyle from './Modal.module.css';

const Overlay = ({ type, title, message, onConfirm }) => {
  const cssTypeClass = type !== 'basic' && modalStyle[type];
  const modalClass = `fixed top-[30vh] left-[10%] w-[80%] z-[100] overflow-hidden md:left-[calc(50%-20rem)] md:w-[40rem] ${cssTypeClass}`;

  return (
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
  );
};

Overlay.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.string,
  onConfirm: PropTypes.func,
};

export default Overlay;
