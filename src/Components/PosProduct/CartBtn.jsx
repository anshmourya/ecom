import React, { useContext } from "react";
import { CartData } from "../../hooks/CartComponent/CartData";

export default function CartBtn({ cart }) {
  const { addToCart, removeFromCart } = useContext(CartData);

  return (
    <>
      <button onClick={() => addToCart(cart)}>add to cart</button>
    </>
  );
}
