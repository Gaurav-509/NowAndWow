import "./directory-item.styles.scss";

const Categories = ({ category }) => {
  return (
    <div className='directory-item-container'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${category.imageUrl})`,
        }}
      />
      <div className='body'>
        <h2>{category.name}</h2>
        <p className='shopNowKey'>Shop Now</p>
      </div>
    </div>
  );
};

export default Categories;
