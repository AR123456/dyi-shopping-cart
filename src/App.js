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
  // function to add to cart
  const onAdd = (product) => {
    // -check chart items exist,
    const exists = cartItems.find((x) => x.id === product.id);
    if (exists) {
      //  if so increase the quantity by mapping
      // keep other products the same but increase the one with our ID else add this product
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exists, qty: exists.qty + 1 } : x
        )
      );
    } else {
      // product is not in cart yet so add it
    }
  };
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
