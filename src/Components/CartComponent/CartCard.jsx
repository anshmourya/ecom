import React from "react";
import { AiFillDelete } from "react-icons/ai";
function CartCard() {
  return (
    <>
      <div className="cart-card">
        <div className="cart-img">
          <img
            src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
            alt=""
          />
        </div>
        <div className="cart-details">
          <div className="title-price">
            <h2>Trans-Weight Hooded Wind And Water Resistant Shell</h2>
            <span>$11.90</span>
          </div>
          <div className="cart-action">
            <input type="number" min={1} />
            <span>$59.0</span>
            <AiFillDelete />
          </div>
        </div>
      </div>
    </>
  );
}

export default CartCard;
