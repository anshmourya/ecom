import React from "react";

function BannerBox({ product }) {
  return (
    <>
      <div className="banner">
        <div className="img">
          <img src={`./assets/images/${product}.jpg`} alt={product} />
        </div>
      </div>
    </>
  );
}

export default BannerBox;
