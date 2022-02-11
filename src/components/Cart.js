import React from "react";
import { ListGroup } from "react-bootstrap";
// get cart state from context
import { CartState } from "../context/Context";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <div className="home">
      {/* render to products page  */}
      <div className="productContainer">
        {/* react bootsrap list group */}
        <ListGroup>{/* map the cart  */}</ListGroup>
      </div>
    </div>
  );
};

export default Cart;
// resume at https://www.youtube.com/watch?v=HptuMAUaNGk
