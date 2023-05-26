import React from "react";

function CartDetail() {
  return (
    <>
      <div className="total-items">
        <div className="item-detail">
          <span>5 items</span>
          <span>Shipping</span>
        </div>
        <div className="total-price">
          <span>$59.50</span>
          <span>$7.00</span>
        </div>
      </div>
      <div className="total-tax">
        <div className="tax-detail">
          <span>Total (Tax Excl.)</span>
          <span>Taxes</span>
        </div>
        <div className="taxes-price">
          <span>$66.50</span>
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
