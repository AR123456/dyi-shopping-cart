import React from "react";
import Product from "./Product";

const Main = (props) => {
  // get the products from props
  const { products } = props;
  return (
    <>
      <main className="block col-2">
        <h2>Here are the products</h2>
        <div className="row">
          {products.map((product) => (
            <Product key={products.id} product={product}></Product>
          ))}
        </div>
      </main>
    </>
  );
};

export default Main;
