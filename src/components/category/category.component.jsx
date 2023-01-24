import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";

import ProductCard from "../product-card/product-card.component";

import { useSelector } from "react-redux";

import { CategoryContainer } from "./category.styles";

const Category = () => {
  const { category } = useParams();

  const { categoryMap } = useSelector((state) => state.categories);

  const [products, setProducts] = useState(categoryMap[category]);

  useEffect(() => {
    setProducts(categoryMap[category]);
  }, [category, categoryMap]);

  return (
    <Fragment>
      <h2 className='title'>{category.toUpperCase()}</h2>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
