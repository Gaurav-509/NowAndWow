import { SET_CART_ITEMS, SET_IS_CART_OPEN } from "../store/constants/cart.constants";

export const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

export const CartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case SET_CART_ITEMS:
      return { ...state, cartItems: payload }

    case SET_IS_CART_OPEN:
      return { ...state, isCartOpen: payload }
    default:
      return state;
  }
}