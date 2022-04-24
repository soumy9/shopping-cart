import React, { useContext, useState } from 'react';
import CartContext from '../store/cart-context';
import Cart from './Cart';
const CartButton = (props) => {
  const { totalUnits } = useContext(CartContext);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const handleCartButtonClick = () => {
    setIsCartVisible((prevStateValue) => !prevStateValue);
  };

  return (
    <div>
      <button onClick={handleCartButtonClick} className='cart-button'>
        <span>{totalUnits}</span>
        <span>Cart</span>
      </button>
      {isCartVisible && <Cart />}
    </div>
  );
};

export default CartButton;
