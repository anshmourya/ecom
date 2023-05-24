import React from "react";
import { Link } from "react-router-dom";

function PosColumnCard({ CardData }) {
  const { image, title, id, price } = CardData;
  return (
    <>
      <div className="pos-column-card">
        <div className="pos-column-img">
          <Link to={`/product/${id}`}>
            <img src={image} alt={title} />
          </Link>
        </div>
        <div className="pos-column-dec">
          <p>{title}</p>
          <span>${price}</span>
        </div>
      </div>
    </>
  );
}

export default PosColumnCard;
