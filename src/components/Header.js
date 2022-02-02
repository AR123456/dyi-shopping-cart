import React from "react";

const Header = (props) => {
  return (
    <>
      <header className="block row center">
        <div>
          <a href="#/">
            <h1>DYI Shopping Cart</h1>
          </a>
        </div>
        <div>
          <a href="#/cart">Cart</a>
          <a href="#/signin">SignIn</a>
        </div>
      </header>
      <h1>this is my header </h1>
    </>
  );
};

export default Header;
