import React from "react";

const Basket = (props) => {
  // get cartItems from props (useState)
  // get onAdd that was defined in app.js
  const { cartItems, onAdd } = props;

  return (
    <>
      <aside className="block col-1">
        <h2>Shopping Cart</h2>
        <div>
          {/* if the cart is empty  */}
          {cartItems.length === 0 && <div>Cart is empty</div>}

          {cartItems.map((item) => (
            // for each item render this div
            <div key={item.id} className="row">
              {/* pass in item name  */}
              <div className="col-2">{item.name}</div>
              {/* pass in the on onAdd function to the buttons  */}
              <div className="col-2">
                <button onClick={() => onRemove(item)} className="remove">
                  -
                </button>
                <button onClick={() => onAdd(item)} className="add">
                  +
                </button>
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
