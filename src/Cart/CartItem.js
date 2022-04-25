import React from 'react';

const CartItem = React.memo((props) => {
  console.log('CartItem re-rendered');
  const { name, price, description, quantity } = props;

  const handleIncreaseUnits = () => {
    props.onClickIncreaseUnits(props.id, props.price, props.name);
  };
  const handleDecreaseUnits = () => {
    props.onClickDecreaseUnits(props.id);
  };
  return (
    <li className='meal-item'>
      <p>{name}</p>
      <p>${price}</p>
      <p>{description}</p>
      <div>
        <button onClick={handleIncreaseUnits}>+</button>
        {quantity}
        <button onClick={handleDecreaseUnits}>-</button>
      </div>
    </li>
  );
});

export default CartItem;
