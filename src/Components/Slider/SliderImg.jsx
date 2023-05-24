import React from "react";

function SliderImg() {
  return (
    <>
      <div className="Carousel-item">
        <div className="carousel-text">
          <h5 data-aos={"fade-down"}>
            Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
          </h5>
          <h4 data-aos={"fade-up"}>Only in 109.95</h4>
          <button data-aos={"fade-right"}>Shop Now</button>
        </div>
        <div className="carousel-img" data-aos={"fade-left"}>
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default SliderImg;
