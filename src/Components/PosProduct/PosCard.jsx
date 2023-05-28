import React from "react";
import CartBtn from "./CartBtn";
import Star from "./Star";
import { Link } from "react-router-dom";

function PosCard({ CategoryData }) {
  const { title, price, image, id } = CategoryData;
  return (
    <>
      <div className="pos-item">
        <div className="pos-img">
          <Link to={`/product/${id}`}>
            <img src={image} alt={title} />
          </Link>
        </div>
        <div className="pos-title">
          <h6>{title}</h6>
        </div>
        <Star />
        <div className="pos-price">
          <p>${price}</p>
        </div>
        <div className="cart">
          <CartBtn cart={CategoryData} />
        </div>
      </div>
    </>
  );
}

export default PosCard;
