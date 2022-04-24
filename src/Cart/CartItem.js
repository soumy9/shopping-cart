import React from 'react';

const CartItem = (props) => {
  const { name, price, description,quantity } = props;
  
  // const [unitsInCart, setUnitsInCart] = useState(1);
  // const handleIncreaseUnits =()=>{
  //   setUnitsInCart(prevUnits=>++prevUnits);
  // }
  return (
    <li className='meal-item'>
      <p>{name}</p>
      <p>${price}</p>
      <p>{description}</p>
      <p>{quantity}</p>
      {/* <div><button onClick={handleIncreaseUnits}>+</button>{unitsInCart}<button>-</button></div> */}
    </li>
  );
};

export default CartItem;
