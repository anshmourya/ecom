import React from "react";
import Nav from "../Components/Nav";
import Slider from "../Components/Slider/Slider";
import PolicyDetail from "../Components/Policy/PolicyDetail";
import BannerBox from "../Components/BannerBox/BannerBox";
import PosProduct from "../Components/PosProduct/PosProduct";
import CatageoryProduct from "../Components/CatageoryProduct/CatageoryProduct";
import PosColumnSlider from "../Components/PosColumn/PosColumnSlider";

function Home() {
  return (
    <>
      <Nav />
      <Slider />
      <PolicyDetail />
      <div className="banner-container ">
        <BannerBox product={"watch"} />
        <BannerBox product={"headphone"} />
        <BannerBox product={"speaker"} />
      </div>
      <PosProduct />
      <div className="pos-column-slider content">
        <PosColumnSlider category={"jewelery"} />
        <PosColumnSlider category={"women's clothing"} />
        <PosColumnSlider category={"electronics"} />
      </div>
      <CatageoryProduct />
      <div className="banner-container ">
        <BannerBox product={"watch"} />
        <BannerBox product={"headphone"} />
        <BannerBox product={"speaker"} />
      </div>
    </>
  );
}

export default Home;
