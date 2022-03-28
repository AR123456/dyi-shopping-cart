import React from "react";
import { Button, Card } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";
// get prod it is in home.js where we are mapping
const SingleProduct = ({ prod }) => {
  // dispatch to manipulate state, getting from context
  const {
    state: { cart },
    dispatch,
  } = CartState();
  // console.log(cart);
  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={prod.image} alt={prod.name} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>${prod.price}</span>
            {/* if fast delivery show that , if not show 4 day  */}
            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 day delivery</div>
            )}
            <Rating rating={prod.ratings} />
          </Card.Subtitle>
          {/* check cart state to see if product in card is prod.id  */}
          {cart.some((p) => p._id === prod._id) ? (
            // remove from cart
            <Button
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                });
              }}
              variant="danger"
            >
              Remove from cart
            </Button>
          ) : (
            //  add to cart
            <Button
              onClick={() => {
                // kick off dispatch function
                dispatch({
                  // need type and payload (current product )
                  type: "ADD_TO_CART",
                  payload: prod,
                });
              }}
              disabled={!prod.inStock}
            >
              {!prod.inStock ? "Out of Stock" : "Add to Cart"}
            </Button>
          )}

          {/* button to add/remove from cart  */}
          {/* check if instock, if not disable   */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
