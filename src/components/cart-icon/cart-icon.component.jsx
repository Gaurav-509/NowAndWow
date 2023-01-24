import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles";

import { useDispatch, useSelector } from "react-redux";

import {
  selectIsCartOpen,
  selectCartCount,
} from "../../store/selectors/cart.selector.js";
import { setIsCartOpen } from "../../actions/cart.action.js";

const CartIcon = () => {
  const dispatch = useDispatch();

  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);
  console.log("cartCount", cartCount);
  console.log("cartOpen", isCartOpen);

  const toggleCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
  return (
    <CartIconContainer onClick={toggleCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
