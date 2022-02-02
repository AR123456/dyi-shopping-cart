import React from "react";

const Product = (props) => {
  const { product } = props;

  return (
    <>
      <img src={product.image} alt={product.name} className="small" />
      <h3>{product.name}</h3>
      <div> ${product.price} </div>
      <div>
        <button>Add to cart </button>
      </div>
    </>
  );
};

export default Product;
