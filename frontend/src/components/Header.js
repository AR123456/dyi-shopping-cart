import React from "react";
import {
  Navbar,
  Container,
  FormControl,
  Nav,
  Dropdown,
  Badge,
  Button,
} from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";

const Header = () => {
  // showing items in the cart icon in the header
  const {
    state: { cart },
    // need dispatch fro removing from cart
    dispatch,
    productDispatch,
  } = CartState();
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        text="white"
        style={{ height: 80, color: "white" }}
      >
        <Container>
          {/* <Navbar.Brand href="#home"> */}
          <Navbar.Brand>
            {" "}
            <a href="/">Shopping Cart</a>
          </Navbar.Brand>
          <Navbar.Text className="search ">
            {/* input tag for reactstrap */}
            <FormControl
              style={{ width: 500 }}
              placeholder="Search"
              className="m-auto"
              // adding on change to use dispatcher with filters js
              onChange={(e) => {
                productDispatch({
                  type: "FILTER_BY_SEARCH",
                  // this is the search query
                  payload: e.target.value,
                });
              }}
            />
          </Navbar.Text>
          {/* cart icon  */}
          <Nav>
            <Dropdown alignRight>
              <Dropdown.Toggle variant="success">
                <FaShoppingCart color="white" fontSize="25px" />
                <Badge>{cart.length}</Badge>
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ minWidth: 370 }}>
                {/* if has stuff in it do not show its empty  */}
                {cart.length > 0 ? (
                  <>
                    {/* map the cart  */}
                    {cart.map((prod) => (
                      <span className="cartitem" key={prod._id}>
                        <img
                          src={prod.image}
                          className="cartItemImg"
                          alt={prod.name}
                        ></img>
                        <div className="cartItemDetail">
                          <span>{prod.name}</span>
                          <span>${prod.price}</span>
                        </div>
                        <AiFillDelete
                          fontSize="20px"
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: prod,
                            })
                          }
                        />
                      </span>
                    ))}
                    {/* link out to the cart page  */}
                    <Link to="/cart">
                      <Button style={{ width: "95%", margin: "0 10px" }}>
                        Go To Cart
                      </Button>
                    </Link>
                  </>
                ) : (
                  <span style={{ padding: 10 }}>Cart is empty</span>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
