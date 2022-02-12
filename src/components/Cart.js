import React, { useEffect, useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
// get cart state from context
import { CartState } from "../context/Context";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  //  local state to calculate total
  const [total, setTotal] = useState();
  // reduce the cart var use cart.price to calc total price
  useEffect(() => {
    // ruduce takes an accumulator and current
    // curr.price is a string to make it a number
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
    // run every time cart var changes
  }, [cart]);
  return (
    <div className="home">
      {/* render to products page  */}
      <div className="productContainer">
        {/* react bootsrap list group */}
        <ListGroup>
          {/* map the cart  */}
          {cart.map((prod) => (
            <span>{prod.name}</span>
          ))}
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className="title">Subtotal {cart.length} items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: $ {total}</span>
        <Button type="button" disabled={cart.length === 0}>
          {" "}
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
// resume at https://www.youtube.com/watch?v=HptuMAUaNGk
