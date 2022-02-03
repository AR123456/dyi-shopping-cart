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

          {cartItems.map((item) => (
            <div key={item.id} className="row">
              <div className="col-2">item name</div>
              <div className="col-2">
                <button className="remove">-</button>
                <button className="add">+</button>
                buttons to add or remove
              </div>
              <div className="col-2 text-right">quantity and price</div>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Basket;
