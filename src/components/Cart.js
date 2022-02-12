import React, { useEffect, useState } from "react";
import Rating from "../components/Rating.js";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
// get cart state from context
import { CartState } from "../context/Context";
import { AiFillDelete } from "react-icons/ai";

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
            <ListGroup.Item key={prod.id}>
              <Row>
                <Col md={2}>
                  <Image src={prod.image} alt={prod.name} fluid rouned></Image>
                </Col>
                <Col md={2}>
                  <span>{prod.name}</span>
                </Col>
                <Col md={2}>
                  <span>$ {prod.price}</span>
                </Col>
                <Col md={2}>
                  <Rating rating={prod.ratings}></Rating>
                </Col>
                <Col md={2}>
                  <Form.Control
                    as="select"
                    value={prod.quty}
                    // send to payload the id and qty of product from the form
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: prod.id,
                          qty: e.target.value,
                        },
                      })
                    }
                  >
                    {[...Array(prod.inStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      })
                    }
                  >
                    <AiFillDelete fontSize="20px"></AiFillDelete>
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
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
