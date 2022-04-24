import React, {useContext} from 'react';
import MealItem from './MealItem';
import CartContext from '../store/cart-context';
import { useCallback } from 'react';
import DUMMY_MEALS from './DUMMY_MEALS';

const MealsMenu = () => {
  console.log('MealsMenu re-rendered');
  const cartCtx = useContext(CartContext);
  const handleAddToCart = useCallback((id, price, name) => {
    cartCtx.addUnits(id, price, name);
  },[]);
  // const handleAddToCart = (id, price, name) => {
  //   cartCtx.addUnits(id, price, name);
  // };
  return (
    <ul className='meals-menu'>
      {DUMMY_MEALS.map((meal) => (
        <MealItem mealData={meal} key={meal.id} onAddToCart={handleAddToCart}/>
      ))}
    </ul>
  );
};

export default MealsMenu;
