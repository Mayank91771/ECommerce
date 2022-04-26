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
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      );
      const cartItems = existItem //we cheeck if we already have existItem else we add it
        ? state.cart.cartItems.map(
            (item) => (item._id === existItem._id ? newItem : item) // update current item with newItem, i.e., update qty : else keep the current item
          )
        : [...state.cart.cartItems, newItem];
      return { ...state, cart: { ...state.cart, cartItems } };

    // return {
    //   // keep all previous values in the state and inside cart obj add a item only in the cartItem
    //   ...state, //keep all previous values in the state
    //   cart: {
    //     ...state.cart, // keep all previous values in cart in state and only update cartItems in next line
    //     cartItems: [...state.cart.cartItems, action.payload], // [keep all the previous cart items, add the new item]
    //   },
    // };

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
