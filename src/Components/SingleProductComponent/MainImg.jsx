import React, { useContext } from "react";
import { NavForContext } from "../../hooks/SingleProduct/NavForContext";
import { PageData } from "../../hooks/SingleProduct/PageData";
import Slider from "react-slick";
import SingleImg from "./SingleImg";

function MainImg() {
  const { Nav1, setNav2 } = useContext(NavForContext);
  const { SingleProduct } = useContext(PageData);
  const { image, title } = SingleProduct;
  const settings = {
    fade: true,
    arrows: false,
    dots: false,
  };
  return (
    <>
      <div className="main-img">
        <Slider
          asNavFor={Nav1}
          ref={(slider2) => setNav2(slider2)}
          {...settings}
        >
          <SingleImg image={image} title={title} />
          <SingleImg image={image} title={title} />
          <SingleImg image={image} title={title} />
        </Slider>
      </div>
    </>
  );
}

export default MainImg;
