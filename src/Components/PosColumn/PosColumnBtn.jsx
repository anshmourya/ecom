import React, { useContext } from "react";
import { PosContent } from "../../hooks/PosHook";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

function PosColumnBtn() {
  const { slider } = useContext(PosContent);
  return (
    <>
      <BsArrowLeftCircle
        onClick={() => console.log(slider.current.slickNext())}
      />
      <BsArrowRightCircle
        style={{
          marginLeft: "10px",
        }}
        onClick={() => slider?.current?.slickNext()}
      />
    </>
  );
}

export default PosColumnBtn;
