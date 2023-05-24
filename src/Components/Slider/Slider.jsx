import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SliderImg from "./SliderImg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import Aos from "aos"; //AOS
import SliderBtn from "../PosProduct/SliderBtn";
function Slider() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <div className="slider">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          speed={1000}
        >
          <SwiperSlide>
            <SliderImg />
          </SwiperSlide>
          <SwiperSlide>
            <SliderImg />
          </SwiperSlide>
          <SwiperSlide>
            <SliderImg />
          </SwiperSlide>
          <SwiperSlide>
            <SliderImg />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Slider;
