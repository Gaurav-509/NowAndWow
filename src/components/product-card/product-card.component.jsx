import {
  ProductCardContainer,
  InvertedProductCardButton,
  Footer,
} from "./product-card.styles";
import { addItemToCart } from "../../actions/cart.action";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/selectors/cart.selector";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;

  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const ProductAddToCart = () => dispatch(addItemToCart(cartItems, product));
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
