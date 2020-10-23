import { useReducer } from "react";
import {
  UPDATE_DRINKS,
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  ADD_MULTIPLE_TO_CART,
  CLEAR_CART
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_DRINKS:
      return {
        ...state,
        drinks: [...action.drinks],
      };

    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.drink],
      };

    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.drinks],
      };

    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map(drink => {
          if (action._id === drink._id) {
            drink.purchaseQuantity = action.purchaseQuantity
          }
          return drink
        })
      };

    case REMOVE_FROM_CART:
      let newState = state.cart.filter(drink => {
        return drink._id !== action._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState
      };

    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: []
      };

    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState)
}