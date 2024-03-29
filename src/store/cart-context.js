import React, { useReducer } from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  totalUnits: 0,
  addUnits: (id) => {},
  removeUnits: (id) => {},
});

export const CartProvider = (props) => {
  const defaultCartState = {
    items: [],
    totalAmount: 0,
    totalUnits: 0,
  };
  const cartReducer = (state, action) => {
    let newTotalAmount, newTotalUnits, newItems;
    let targetIndex = -1;
    const targetItem = state.items.find((item, index) => {
      targetIndex = index;
      return item.id === action.id;
    });
    switch (action.type) {
      case 'ADD':
        newTotalAmount = state.totalAmount + action.price;
        newTotalUnits = state.totalUnits + 1;
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
      case 'DECREASE':
        if (targetItem.quantity === 1) {
          newItems = state.items.filter((item) => item.id !== action.id);
        } else {
          newItems = [...state.items];
          newItems[targetIndex].quantity -= 1;
        }
        newTotalAmount = state.totalAmount - state.items[targetIndex].price;
        newTotalUnits = state.totalUnits - 1;
        break;
      default:
        newItems = [...state.items];
    }

    return {
      totalAmount: Number(newTotalAmount.toFixed(2)),
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
    dispatchCartAction({ type: 'DECREASE', id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
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
