import React from "react";
import PosColumnBtn from "./PosColumnBtn";
function PosColumnNav({ title }) {
  return (
    <>
      <div className="pos-column-nav">
        <div className="pos-column-nav-title">
          <h2>{title}</h2>
        </div>
        {/* <div className="pos-column-nav-btn">
          <PosColumnBtn />
        </div> */}
      </div>
    </>
  );
}

export default PosColumnNav;
