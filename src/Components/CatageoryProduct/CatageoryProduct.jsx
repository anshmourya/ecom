import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../hooks/DataContext";
import CatageoryCard from "./CatageoryCard";
import Slider from "react-slick";
import { Skeleton } from "@mui/material";
function CatageoryProduct() {
  const [Loading, setLoading] = useState(true);
  const { Category } = useContext(DataContext);
  const CategoryImg = [
    "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
  ];
  useEffect(() => {
    Category ? setLoading(false) : setLoading(true);
  }, [Category]);
  const responsive = [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 764,
      settings: {
        slidesToShow: 1,
        centerMode: true,
      },
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 1,
    slidesPerRow: 1,
    arrows: true,
    responsive: responsive,
  };
  return (
    <>
      {Loading ? (
        <Skeleton variant="rectangular" height={220} />
      ) : (
        <div className="content">
          <div className="Catageory-porduct">
            <Slider {...settings}>
              {Category.map((data, index) => (
                <CatageoryCard
                  Category={data}
                  key={index}
                  img={CategoryImg[index]}
                />
              ))}
            </Slider>
          </div>
        </div>
      )}
    </>
  );
}

export default CatageoryProduct;
