import "./cart-dropdown.styles.scss";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { CartContext } from "../context/cart.context";

import Button from "../button/button.component";
import CartItems from "../cart-items/cart-items.component";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const checkoutPageHandler = () => {
    navigate("/checkout");
  };
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((cartItem) => (
          <CartItems key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <Button onClick={checkoutPageHandler}>Go to Checkout</Button>
    </div>
  );
};

export default CartDropdown;
