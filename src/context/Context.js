import React from "react";
import { createContext } from "react";
const Cart = createContext();

const Context = ({ children }) => {
  // context will wrap create react app
  // children are coming from index.js
  return <Cart.Provider>{children}</Cart.Provider>;
};

export default Context;
