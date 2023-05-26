import React from "react";
import Relevance from "./Relevance";

function FilterNav() {
  return (
    <>
      <div className="filter-nav">
        <div className="logo" style={{ color: "#000", flex: "0" }}>
          LOGO
        </div>
        <div className="filter">
          <Relevance />
        </div>
      </div>
    </>
  );
}

export default FilterNav;
