import React from "react";

const Basket = (props) => {
  // get cartItems from props (useState)
  const { cartItems } = props;

  return (
    <>
      <aside className="block col-1">
        <h2>Shopping Cart</h2>
        <div>
          {/* if the cart is empty  */}
          {cartItems.length === 0 && <div>Cart is empty</div>}
          {/* else do this  */}
        </div>
      </aside>
    </>
  );
};

export default Basket;
