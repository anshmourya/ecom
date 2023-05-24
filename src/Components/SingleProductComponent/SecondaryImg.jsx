import React, { useContext } from "react";
import { PageData } from "../../hooks/SingleProduct/PageData";
import { NavForContext } from "../../hooks/SingleProduct/NavForContext";
import Slider from "react-slick";
import SingleImg from "./SingleImg";

function SecondaryImg() {
  const { SingleProduct } = useContext(PageData);
  const { image, title } = SingleProduct;
  const { Nav2, setNav1 } = useContext(NavForContext);
  return (
    <>
      <div className="secondary-img">
        <Slider
          asNavFor={Nav2}
          ref={(slider1) => setNav1(slider1)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
          dots={false}
          arrows={false}
        >
          <SingleImg image={image} title={title} />
          <SingleImg image={image} title={title} />
          <SingleImg image={image} title={title} />
        </Slider>
      </div>
    </>
  );
}

export default SecondaryImg;
