import {
  ProductCardContainer,
  InvertedProductCardButton,
  Footer,
} from "./product-card.styles";
import { useContext } from "react";
import { CartContext } from "../context/cart.context";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);
  const ProductAddToCart = () => addItemToCart(product);
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <span className='name'>{name}</span>
        <span className='price'> ${price} </span>
      </Footer>
      <InvertedProductCardButton onClick={ProductAddToCart}>
        Add to Cart
      </InvertedProductCardButton>
    </ProductCardContainer>
  );
};
export default ProductCard;
