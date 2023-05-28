import React, { useContext } from "react";
import { CartData } from "../../hooks/CartComponent/CartData";
import {
  AiFillDelete,
  AiOutlineArrowUp,
  AiOutlineArrowDown,
} from "react-icons/ai";

function CartCard({ item }) {
  const { addToCart, removeFromCart } = useContext(CartData);
  const { title, image, price, quantity } = item;

  return (
    <div className="cart-card">
      <div className="cart-img">
        <img src={image} alt={title} />
      </div>
      <div className="cart-details">
        <div className="title-price">
          <h2>{title}</h2>
          <span>${price}</span>
        </div>
        <div className="cart-action">
          <div className="action-btn">
            <input type="number" min={1} value={quantity} />
            <div className="cart-btns">
              <AiOutlineArrowUp onClick={() => addToCart(item)} />
              <AiOutlineArrowDown
                style={{ marginTop: "6px" }}
                onClick={() => removeFromCart(item)}
              />
            </div>
          </div>
          <span>${Math.round(price * quantity * 100) / 100}</span>
          <AiFillDelete />
        </div>
      </div>
    </div>
  );
}

export default CartCard;
