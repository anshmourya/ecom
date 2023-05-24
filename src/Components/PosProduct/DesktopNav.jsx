import React, { memo } from "react";
import NavList from "../NavList";
import SliderBtn from "./SliderBtn";

function DesktopNav({ CategoryList }) {
  return (
    <>
      <div className="desktop-category">
        <NavList list={CategoryList} />
      </div>
      <div className="slider-btn">
        <SliderBtn />
      </div>
    </>
  );
}

export default memo(DesktopNav);
