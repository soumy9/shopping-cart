import React, { useCallback } from 'react';
const MealItem = (props) => {
  console.log('MealItem re-rendered');
  const { name, price, description } = props.mealData;
  // const handleAddToCart = useCallback(() => {
  //   props.onAddToCart(
  //     props.mealData.id,
  //     props.mealData.price,
  //     props.mealData.name
  //   );
  // }, []);

  const handleAddToCart = () => {
    props.onAddToCart(
      props.mealData.id,
      props.mealData.price,
      props.mealData.name
    );
  };
  return (
    <li className='meal-item'>
      <p>{name}</p>
      <p>${price}</p>
      <p>{description}</p>
      <button onClick={handleAddToCart}>Add to cart</button>
    </li>
  );
};

export default MealItem;
