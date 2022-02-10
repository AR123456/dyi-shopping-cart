import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
// get prod it is in home.js where we are mapping
const SingleProduct = ({ prod }) => {
  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={prod.image} alt={prod.name} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            {/*format price  */}
            <span>${prod.price}</span>
            {/* if fast delivery show that , if not show 4 day  */}
            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 day delivery</div>
            )}
            <Rating rating={prod.ratings} />
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
