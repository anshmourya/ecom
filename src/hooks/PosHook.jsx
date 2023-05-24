import React, { createContext, useState } from "react";

export const PosContent = createContext();

export const PosProvider = ({ children }) => {
  const [swiper, setSwiper] = useState(null);
  const slider = React.useRef(null);
  const goToNextSlide = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };
  const goToPrevSlide = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };
  return (
    <PosContent.Provider
      value={{ goToNextSlide, goToPrevSlide, setSwiper, slider }}
    >
      {children}
    </PosContent.Provider>
  );
};
