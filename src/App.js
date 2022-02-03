import Header from "./components/Header";
import Main from "./components/Main";
import Basket from "./components/Basket";
import data from "./data";
import { useState } from "react";

function App() {
  // pass product to main
  const { products } = data;
  // useState hook - cart items to empty array
  const [cartItems, setCartItems] = useState([]);
  return (
    <div className="App">
      <Header></Header>
      <div className="row">
        <Main products={products} />
        <Basket cartItems={cartItems} />
      </div>
    </div>
  );
}

export default App;
