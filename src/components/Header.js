import React from "react";
import { Navbar, Container, FormControl } from "react-bootstrap";

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
            ></FormControl>
          </Navbar.Text>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
