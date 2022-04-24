import React, { useReducer } from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmmount: 0,
  totalUnits: 0,
  addUnits: (id) => {},
  removeUnits: (id) => {},
});

export const CartProvider = (props) => {
  const defaultCartState = {
    items: [],
    totalAmmount: 0,
    totalUnits: 0,
  };
  const cartReducer = (state, action) => {
    let newTotalAmount, newTotalUnits, newItems;
    // const targetItem = state.items.find((item) => item.id === action.id);
    switch (action.type) {
      case 'ADD':
        newTotalAmount = state.totalAmmount + action.price;
        newTotalUnits = state.totalUnits + 1;
        let targetIndex = -1;
        const targetItem = state.items.find((item, index) => {
          targetIndex = index;
          return item.id === action.id;
        });
        if (targetItem) {
          newItems = [...state.items];
          newItems[targetIndex].quantity += 1;
        } else {
          const newItem = {
            id: action.id,
            price: action.price,
            name: action.name,
            quantity: 1,
          };
          newItems = [...state.items, newItem];
        }
        break;
      default:
        newItems = [...state.items];
    }

    return {
      totalAmmount: newTotalAmount,
      totalUnits: newTotalUnits,
      items: newItems,
    };
  };
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addUnitsToCartHandler = (id, price, name) => {
    dispatchCartAction({ type: 'ADD', id: id, price: price, name: name });
  };
  const removeUnitsFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE' });
  };
  const cartContext = {
    items: cartState.items,
    totalAmmount: cartState.totalAmmount,
    totalUnits: cartState.totalUnits,
    addUnits: addUnitsToCartHandler,
    removeUnits: removeUnitsFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContext;
