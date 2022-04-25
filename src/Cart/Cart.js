import React,{useContext} from 'react';
import CartItem from './CartItem';
import './Cart.scss';
import CartContext from '../store/cart-context';
const Cart = (props) => {
  console.log('Cart re-rendered');
  const cartCtx = useContext(CartContext);
  return (
    <div className='cart'>
      <ul className='cart__items'>
        {cartCtx.items.map((item) => (
          <CartItem {...item} key={item.id} onClickIncreaseUnits={cartCtx.addUnits} onClickDecreaseUnits={cartCtx.removeUnits}/>
        ))}
      </ul>
      <p className='cart__total'>${cartCtx.totalAmount.toFixed(2)}</p>
      <div className='cart__action-buttons'>
        <button className='cart__action-buttons--order'>Order</button>
        <button className='cart__action-buttons--cancel'>Cancel</button>
      </div>
    </div>
  );
};

export default Cart;
