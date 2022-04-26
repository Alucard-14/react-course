import React from 'react';
import PropTypes from 'prop-types';

import CartIcon from '../../Cart/CartIcon';

const CartButton = (props) => {
  return (
    <button className='group cursor-pointer border-none bg-[color:#4d1601] text-white py-3 px-12 flex justify-around items-center rounded-[25px] font-bold hover:bg-[color:#2c0d00] active:bg-[color:#2c0d00]'>
      <span className='w-[1.35rem] h-[1.35rem] mr-2'>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className='bg-[color:#b94517] py-1 px-4 rounded-[25px] ml-4 font-bold group-hover:bg-[color:#92320c] group-active:bg-[color:#92320c]'>
        3
      </span>
    </button>
  );
};

CartButton.propTypes = {};

export default CartButton;
