import React from 'react';
import PropTypes from 'prop-types';

import mealImg from '../../../assets/meals2.jpg';

import './Header.css';

const Header = () => {
  return (
    <>
      <header className='fixed top-0 left-0 w-full h-20 bg-[#8a2b06] text-white flex justify-between items-center py-0 px-[10%] shadow-[0_2px_8px_rgba(0,0,0,0.25)] z-10'>
        <h1>Meals</h1>
        <button>Cart</button>
      </header>
      <div className='w-full h-[25rem] z-0 overflow-hidden'>
        <img
          // className='w-full h-full object-cover -rotate-[5deg] -translate-y-20 -translate-x-4'
          className={'buffet-img'}
          src={mealImg}
          alt='buffet'
        />
      </div>
    </>
  );
};

Header.propTypes = {};

export default Header;
