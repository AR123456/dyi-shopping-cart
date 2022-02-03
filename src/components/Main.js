import React from "react";
import Product from "./Product";

const Main = (props) => {
  // get the products and onAdd from props
  // onAdd function was defined inApp.js
  const { products, onAdd } = props;
  return (
    <>
      <main className="block col-2">
        <div className="row">
          {products.map((product) => (
            // map the array and put into JSX object
            // pass onAdd on to the product component to handle the onClick
            <Product
              key={products.id}
              product={product}
              onAdd={onAdd}
            ></Product>
          ))}
        </div>
      </main>
    </>
  );
};

export default Main;
