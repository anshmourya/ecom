import React from "react";
import CartBtn from "../PosProduct/CartBtn";
import ProductReassurence from "./ProductReassurence";
function BuysingOption() {
  return (
    <>
      <div className="buying-option">
        <input type="number" min={1} />
        <CartBtn />
        <div className="product-reassurence">
          <ProductReassurence />
          <ProductReassurence />
          <ProductReassurence />
        </div>
      </div>
    </>
  );
}

export default BuysingOption;
