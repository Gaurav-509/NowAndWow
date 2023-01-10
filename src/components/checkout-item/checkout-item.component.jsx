import {
  CheckoutItemContainer,
  ImageContainer,
  NamePriceQuantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles.jsx";
import { useContext } from "react";
import { CartContext } from "../context/cart.context.jsx";

import {
  removeItemToCart,
  clearItemFromCart,
  addItemToCart,
} from "../context/cart.context.jsx";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { addItemToCart, removeItemToCart, clearItemFromCart } =
    useContext(CartContext);

  const addItemHandler = () => addItemToCart(cartItem);
  const RemoveItemHandler = () => removeItemToCart(cartItem);
  const clearItemHandler = () => clearItemFromCart(cartItem);
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
