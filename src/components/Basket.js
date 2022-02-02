import React from "react";

const Basket = (props) => {
  return (
    <>
      <aside className="block col-1">
        <h2>Cart stuff</h2>
        <div>
          <div className="row">
            <div className="col-2"></div>
            <div className="col-2">
              <button className="remove">-</button>
              <button className="add">+</button>
            </div>
            <div className="col-2 text-right">x $</div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Basket;
