import {
  CheckoutItemContainer,
  ImageContainer,
  NamePriceQuantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles.jsx";

import {
  addItemToCart,
  removeItemToCart,
  clearItemFromCart,
} from "../../actions/cart.action.js";
import { selectCartItems } from "../../store/selectors/cart.selector.js";

import { useDispatch, useSelector } from "react-redux";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const RemoveItemHandler = () =>
    dispatch(removeItemToCart(cartItems, cartItem));
  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <NamePriceQuantity>{name}</NamePriceQuantity>
      <NamePriceQuantity>
        <Arrow onClick={RemoveItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>

        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </NamePriceQuantity>
      <NamePriceQuantity>${price}</NamePriceQuantity>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
