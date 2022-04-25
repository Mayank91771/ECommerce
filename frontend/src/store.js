import { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
  cart: {
    cartItems: [], //no item in the cart
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "CART_ADD_ITEM":
      // keep all previous values in the state and inside cart obj add a item only in the cartItem
      return {
        ...state, //keep all previous values in the state
        cart: {
          ...state.cart, // keep all previous values in cart in state and only update cartItems in next line
          cartItems: [...state.cart.cartItems, action.payload], // [keep all the previous cart items, add the new item]
        },
      };
    default:
      return state;
  }
}

//HOC - higher order function
export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch }; //value contains current state in the context and dispatch to update that state
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}