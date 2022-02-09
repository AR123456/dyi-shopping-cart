import React from "react";
import { CartState } from "../context/Context";
import SingleProduct from "./SingleProduct";

const Home = () => {
  // getting products from context
  const {
    state: { products },
  } = CartState();
  console.log(products);
  return (
    <div className="home">
      {/* Fliters will go here */}
      {/* map through products  */}
      <div className="productContainer">
        {products.map((prod) => {
          return <SingleProduct prod={prod} key={prod.id}></SingleProduct>;
        })}
      </div>
    </div>
  );
};

export default Home;
// 25:20 things broke
