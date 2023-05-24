import React from "react";
import { VscChevronRight } from "react-icons/vsc";
function CatageoryCard({ Category, img }) {
  return (
    <>
      <div className="Catageory-porduct-card">
        <div className="Catageory-img">
          <img src={img} alt={Category} />
        </div>
        <div className="Catageory-desc">
          <h2>{Category}</h2>
          <p>20 products</p>
          <button>
            Shop Now <VscChevronRight />
          </button>
        </div>
      </div>
    </>
  );
}

export default CatageoryCard;
