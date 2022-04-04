import React, { useState } from 'react';

import './App.css';
import Card from './components/UI/Card';
import Modal from './components/UI/Modal';

function App() {
  const [modalView, setModalView] = useState(false);

  const handleOpenModal = () => {
    setModalView(true);
  };

  const handleCloseModal = () => {
    setModalView(false);
  };

  return (
    <div className='App'>
      <h1 className='title-h1'>Hello World</h1>
      <Card title='Holi' buttonLabel='Duerma' onClick={handleOpenModal} />
      <Card title='Holas' buttonLabel='Despierto' onClick={handleOpenModal} />
      {modalView && <Modal onClick={handleCloseModal} />}
    </div>
  );
}

export default App;
