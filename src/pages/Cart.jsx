import React, { useContext } from "react";
import Nav from "../Components/Nav";

import CartCard from "../Components/CartComponent/CartCard";
import CartDetail from "../Components/CartComponent/CartDetail";
import { CartData } from "../hooks/CartComponent/CartData";

function Cart() {
  const { carItems } = useContext(CartData);
  return (
    <>
      <Nav />
      <div className="content cart-Summary">
        <div className="cartCards">
          {carItems.length > 0 ? (
            carItems.map((item) => <CartCard item={item} key={item.id} />)
          ) : (
            <div>Empty Cart..</div>
          )}
        </div>

        <div className="cart-total">
          <CartDetail />
        </div>
      </div>
    </>
  );
}

export default Cart;
