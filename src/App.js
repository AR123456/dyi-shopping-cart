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
  const onRemove = (product) => {
    //get product from cart items using find, look for matching id
    const exists = cartItems.find((x) => x.id === product.id);
    if (exists.qty === 1) {
      //there is one in cart so remove it using filter method
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      // the quantity is more than one so decrease  the amount by one
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exists, qty: exists.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <Header></Header>
      <div className="row">
        {/* pass onAdd and onRemove functions to basket  */}
        <Main onAdd={onAdd} onRemove={onRemove} products={products} />
        {/* pass onAdd and on Remove functions to the basket */}
        <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
      </div>
    </div>
  );
}

export default App;
