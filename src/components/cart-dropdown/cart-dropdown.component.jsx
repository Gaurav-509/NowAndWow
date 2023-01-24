import {
  CartDropdownContainer,
  EmptyMessage,
  CartItemsContainer,
} from "./cart-dropdown.styles.jsx";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/selectors/cart.selector.js";

import Button from "../button/button.component";
import CartItems from "../cart-items/cart-items.component";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  console.log("cartItems", cartItems);
  const navigate = useNavigate();
  const checkoutPageHandler = () => {
    navigate("/checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItems key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage className='empty-message'>
            Your cart is empty
          </EmptyMessage>
        )}
      </CartItemsContainer>
      <Button onClick={checkoutPageHandler}>Go to Checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
