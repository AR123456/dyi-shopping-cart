import React from "react";
import Product from "./Product";

const Main = (props) => {
  // get the products from props
  const { products } = props;
  return (
    <>
      <main className="block col-2">
        <div className="row">
          {products.map((product) => (
            // map the array and put into JSX object
            <Product key={products.id} product={product}></Product>
          ))}
        </div>
      </main>
    </>
  );
};

export default Main;
