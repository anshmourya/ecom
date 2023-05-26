import React from "react";
import Nav from "../Components/Nav";

import CartCard from "../Components/CartComponent/CartCard";
import CartDetail from "../Components/CartComponent/CartDetail";

function Cart() {
  return (
    <>
      <Nav />
      <div className="content cart-Summary">
        <div className="cartCards">
          <CartCard />
          <CartCard />
          <CartCard />
        </div>

        <div className="cart-total">
          <CartDetail />
        </div>
      </div>
    </>
  );
}

export default Cart;
