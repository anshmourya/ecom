import React, { useContext } from "react";
import { PosContent } from "../../hooks/PosHook";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
function SliderBtn() {
  const { goToNextSlide, goToPrevSlide } = useContext(PosContent);
  return (
    <>
      <BsArrowLeftCircle onClick={goToPrevSlide} />
      <BsArrowRightCircle
        style={{
          marginLeft: "10px",
        }}
        onClick={goToNextSlide}
      />
    </>
  );
}

export default SliderBtn;
