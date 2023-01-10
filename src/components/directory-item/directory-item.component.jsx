import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";
import { useNavigate } from "react-router-dom";

const Categories = ({ category }) => {
  const navigate = useNavigate();
  const { name, imageUrl } = category;

  const onCategoryChangeHandler = () => {
    navigate(`/shop/${name.toLocaleLowerCase()}`);
  };
  return (
    <DirectoryItemContainer onClick={onCategoryChangeHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{name}</h2>
        <p className='shopNowKey'>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default Categories;
