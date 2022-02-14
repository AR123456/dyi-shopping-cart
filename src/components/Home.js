import React from "react";
import { CartState } from "../context/Context";
import Filters from "./Filters";
import SingleProduct from "./SingleProduct";
import "./styles.css";
const Home = () => {
  // getting products from context
  const {
    state: { products },
    // bring in productState
    productState: { sort, byStock, byFastDelivery, byRating, serachQuery },
  } = CartState();
  // console.log(products);
  // this function will manipulate the state and show filtered products
  const transformProducts = () => {
    let sortedProducts = products;
    if (sort) {
      //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
      //The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }
    return sortedProducts;
  };

  return (
    <div className="home">
      <Filters></Filters>
      {/* map through products  before filter implemented  */}
      {/* <div className="productContainer">
        {products.map((prod) => {
          return <SingleProduct prod={prod} key={prod.id}></SingleProduct>;
        })}
      </div> */}
      {/* rendering the products with filtering implemented  */}
      <div className="productContainer">
        {transformProducts().map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
// 25:20 things broke
