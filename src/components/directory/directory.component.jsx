import "./directory.styles.scss";
import Categories from "../category/categories.component";

const Directory = () => {
  const productCategories = [
    {
      id: 1,
      name: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      name: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      name: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      name: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      name: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];
  return (
    <div className='directory-container'>
      {productCategories.map((category) => {
        return <Categories category={category} />;
      })}
    </div>
  );
};
export default Directory;
