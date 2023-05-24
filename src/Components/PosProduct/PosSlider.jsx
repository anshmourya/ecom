import React, { useContext, useEffect, useState } from "react";
import { Skeleton } from "@mui/material";
import { DataContext } from "../../hooks/DataContext";
import { PosContent } from "../../hooks/PosHook";
import PosCard from "./PosCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

function PosSlider() {
  const { setSwiper } = useContext(PosContent);
  const { SpecificCategory, getSpecficCategoryData } = useContext(DataContext);
  const [Loading, setLoading] = useState(true);
  const [CategoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getSpecficCategoryData(SpecificCategory);
      setCategoryData(data);
      setLoading(false);
    };
    fetchData();
  }, [SpecificCategory]);

  return (
    <>
      {Loading ? (
        <Skeleton variant="rectangular" height={332} />
      ) : (
        <Swiper
          onSwiper={setSwiper}
          spaceBetween={10}
          slidesPerView={2}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          speed={1000}
          breakpoints={{
            768: {
              spaceBetween: 20,
              slidesPerView: 3,
            },
            1000: {
              spaceBetween: 30,
              slidesPerView: 4,
            },
          }}
        >
          {CategoryData.map((data) => (
            <SwiperSlide key={data.id}>
              <PosCard CategoryData={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}

export default PosSlider;
