import "./categories.styles.scss";

const Categories = ({ category }) => {
  return (
    <div className='category-container'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${category.imageUrl})`,
        }}
      />
      <div className='category-body-container'>
        <h2>{category.name}</h2>
        <p className='shopNowKey'>Shop Now</p>
      </div>
    </div>
  );
};

export default Categories;
