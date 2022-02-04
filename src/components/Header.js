import React from "react";
import {
  Navbar,
  Container,
  FormControl,
  Nav,
  Dropdown,
  Badge,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        text="white"
        style={{ height: 80, color: "white" }}
      >
        <Container>
          <Navbar.Brand href="#home">
            {" "}
            <a href="#">Shopping Cart</a>
          </Navbar.Brand>
          <Navbar.Text className="search ">
            {/* input tag for reactstrap */}
            <FormControl
              style={{ width: 500 }}
              placeholder="Search"
              className="m-auto"
            />
          </Navbar.Text>
          {/* cart icon  */}
          <Nav>
            <Dropdown alignRight>
              <Dropdown.Toggle variant="success">
                <FaShoppingCart color="white" fontSize="25px" />
                <Badge>{10}</Badge>
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ minWidth: 370 }}>
                <span style={{ padding: 10 }}>Cart is empty</span>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
// https://www.youtube.com/watch?v=HptuMAUaNGk
