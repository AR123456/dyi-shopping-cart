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
      // product is not in cart yet so add it spread operator array concatination
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  return (
    <div className="App">
      <Header></Header>
      <div className="row">
        {/* pass onAdd function to basket  */}
        <Main onAdd={onAdd} products={products} />
        {/* pass onAdd function to the basket */}
        <Basket onAdd={onAdd} cartItems={cartItems} />
      </div>
    </div>
  );
}

export default App;
