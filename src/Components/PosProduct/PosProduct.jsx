import React from "react";

import PosNav from "./PosNav";

import PosSlider from "./PosSlider";
function PosProduct() {
  return (
    <>
      <div className="content">
        <div className="pos-product">
          <PosNav />
          <PosSlider />
        </div>
      </div>
    </>
  );
}

export default PosProduct;
