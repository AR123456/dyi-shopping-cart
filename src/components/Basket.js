import React from "react";

const Basket = (props) => {
  // get cartItems from props (useState)
  // get onAdd that was defined in app.js
  const { cartItems, onAdd, onRemove } = props;
  // order summary items
  // using reduce here
  const itemsPrice = cartItems.reduce((a, c) => c.qty * c.price, 0);
  //
  const taxPrice = itemsPrice * 0.14;
  //
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  //
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

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
              </div>
              {/* div to show quantity and price - to 2 decimal places  */}
              <div className="col-2 text-right">
                {item.qty}x ${item.price.toFixed(2)}
              </div>
            </div>
          ))}
          {/* stuff for cart summary  */}
          {cartItems.length !== 0 && (
            <>
              <hr></hr>
              <div className="row">
                <div className="col-2">Items Price</div>
                <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
              </div>
              <div className="row">
                <div className="col-2">Tax </div>
                <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
              </div>
              <div className="row">
                <div className="col-2">Shipping</div>
                <div className="col-1 text-right">
                  ${shippingPrice.toFixed(2)}
                </div>
              </div>

              <div className="row">
                <div className="col-2">
                  <strong>Total price</strong>
                </div>
                <div className="col-1 text-right">${totalPrice.toFixed(2)}</div>
              </div>
              <hr />
              <div className="row">
                <button>Check out</button>
              </div>
            </>
          )}
        </div>
      </aside>
    </>
  );
};

export default Basket;
