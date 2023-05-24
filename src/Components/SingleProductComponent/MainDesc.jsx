import React from "react";
import Description from "./Description";

function MainDesc({ desc }) {
  return (
    <>
      <div className="title">
        <h2>Description</h2>
      </div>
      <div className="main-detail-desc">
        <Description desc={desc} />
      </div>
    </>
  );
}

export default MainDesc;
