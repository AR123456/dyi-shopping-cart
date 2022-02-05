import React from "react";
import { CartState } from "../context/Context";

const Home = () => {
  // getting products from context
  const {
    state: { products },
  } = CartState();
  console.log(products);
  return (
    <div className="home">
      {/* Fliters will go here */}
      Home
    </div>
  );
};

export default Home;
// 25:20 things broke
