import React from "react";

const Product = (props) => {
  // get product from props
  // get onAdd from parent which is main.js
  const { product, onAdd } = props;

  return (
    <>
      <img src={product.image} alt={product.name} className="small" />
      <h3>{product.name}</h3>
      <div> ${product.price} </div>
      <div>
        <button onClick={onAdd}>Add to cart </button>
      </div>
    </>
  );
};

export default Product;
