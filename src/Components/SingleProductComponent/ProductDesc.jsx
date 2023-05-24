import React from "react";
import Description from "./Description";
import Star from "../PosProduct/Star";
import BuysingOption from "./BuysingOption";
function ProductDesc({ price, title, desc }) {
  return (
    <>
      <div className="simgle-product-desc">
        <div className="main-desc">
          <div className="tilte">
            <h2>{title}</h2>
          </div>
          <Star />
          <div className="price">
            <span>${price}</span>
          </div>
        </div>
        <div className="secondary-desc">
          <Description desc={desc} />
        </div>
        <div className="cart-option">
          <BuysingOption />
        </div>
      </div>
    </>
  );
}

export default ProductDesc;
