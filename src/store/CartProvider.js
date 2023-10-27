import React, { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount = state.totalAmount + action.item.price;
    const updatedItem = state.items.concat(action.item);
    return {
      items: updatedItem,
      totalAmount: updatedTotalAmount,
    };
  }
  return state;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const itemAddToCart = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const itemRemoveToCart = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: itemAddToCart,
    removeItem: itemRemoveToCart,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

  // if (action.type === "ADD") {
  //   const updatedTotalAmount =
  //     state.totalAmount + action.item.price * action.item.quantity;

  //   const existingCartItemIndex = state.items.findIndex((item) =>
  //   item.id === action.item.id
  //   )
  //   // {
  //   //   if (item.id === action.item.id) {
  //   //     return <p>Item already exist</p>;
  //   //   }
  //   // });

  //   const existingCartItem = state.items[existingCartItemIndex];

  //   let updateItems;

  //   if (existingCartItem) {
  //     const updateItem = {
  //       ...existingCartItem,
  //       quantity: existingCartItem.quantity + action.item.quantity,
  //     };
  //     updateItems = [...state.items];
  //     updateItems[existingCartItemIndex] = updateItem;
  //   } else {
  //     updateItems = state.items.concat(action.item);
  //   }
  //   return {
  //     items: updateItems,
  //     totalAmount: updatedTotalAmount,
  //   };
  // }
  // return defaultCartState;