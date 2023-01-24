import { SET_CART_ITEMS, SET_IS_CART_OPEN } from "../store/constants/cart.constants";

export const setIsCartOpen = (boolean) => dispatch => {
  dispatch({
    type: SET_IS_CART_OPEN, payload: boolean
  })
}

const addCartItem = (cartItems, productToAdd) => {
  // Checks if there productToAdd already exist or not in cartItems
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  // if product is exist in cart then increase cartItem.quantity by 1

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // if productToAdd is not exist in cartItems then
  // Insert productToAdd into cartItem with quantity :1
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  // find if CartItemToRemove is exist in cart or not
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  // if existingCartItem.quantity is equal to 1 then it remove that product form cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  //
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, productToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== productToClear.id);



export const addItemToCart = (cartItems, productToAdd) => dispatch => {
  const newCartItems = addCartItem(cartItems, productToAdd)
  dispatch({
    type: SET_CART_ITEMS, payload: newCartItems
  })

};

export const removeItemToCart = (cartItems, productToRemove) => dispatch => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  dispatch({
    type: SET_CART_ITEMS, payload: newCartItems
  })
};
export const clearItemFromCart = (cartItems, productToClear) => dispatch => {
  const newCartItems = clearCartItem(cartItems, productToClear);
  dispatch({
    type: SET_CART_ITEMS, payload: newCartItems
  })
};