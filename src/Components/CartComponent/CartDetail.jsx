import React, { useContext, useEffect, useState } from "react";
import { CartData } from "../../hooks/CartComponent/CartData";

function CartDetail() {
  const { carItems } = useContext(CartData);
  const [totalItem, setTotalItem] = useState(0);
  const [totalPrices, setTotalPrices] = useState(0);

  useEffect(() => {
    let itemTotal = 0;
    let priceTotal = 0;

    carItems.forEach((item) => {
      itemTotal += item.quantity;
      priceTotal += item.price * item.quantity;
    });

    setTotalItem(itemTotal);
    setTotalPrices(priceTotal);
  }, [carItems]);

  return (
    <>
      <div className="total-items">
        <div className="item-detail">
          <span>{totalItem} items</span>
          <span>Shipping</span>
        </div>
        <div className="total-price">
          <span>${totalPrices.toFixed(2)}</span>
          <span>$7.00</span>
        </div>
      </div>
      <div className="total-tax">
        <div className="tax-detail">
          <span>Total (Tax Excl.)</span>
          <span>Taxes</span>
        </div>
        <div className="taxes-price">
          <span>${(totalPrices + 7).toFixed(2)}</span>
          <span>$0.00</span>
        </div>
      </div>
      <div className="checkout-btn">
        <button>CheckOut</button>
      </div>
    </>
  );
}

export default CartDetail;
