import React, { createContext, useContext, useReducer } from "react";
import faker from "faker";
import { cartReducer } from "./Reducers";
const Cart = createContext();
// this so faker only renders one time
faker.seed(99);
// context will wrap create react app
// children are coming from index.js
const Context = ({ children }) => {
  // using faker to get an array products
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }));
  // userReducer hook - the reducer is a switch case
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    // initally the cart will be empty
    cart: [],
  });
  //   console.log(products);
  //   pass products into the provider using the value prop
  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

// export CartState it is going to the home page
export const CartState = () => {
  return useContext(Cart);
};
export default Context;
