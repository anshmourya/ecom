import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../hooks/DataContext";
import PosColumnCard from "./PosColumnCard";
import PosColumnNav from "./PosColumnNav";
import Slider from "react-slick";
import { Skeleton } from "@mui/material";

function PosColumnSlider({ category }) {
  const [Loading, setLoading] = useState(true);
  const { getSpecficCategoryData } = useContext(DataContext);
  const [CategoryData, setCategoryData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getSpecficCategoryData(category);
      setCategoryData(data);
      setLoading(false);
    };
    fetchData();
  }, [category]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 3,
    slidesPerRow: 1,
    arrows: false,
  };
  return (
    <>
      {Loading ? (
        <Skeleton variant="rectangular" width={400} height={400} />
      ) : (
        <div className=" pos">
          <PosColumnNav title={category} />
          <Slider {...settings}>
            {CategoryData.map((data, index) => {
              return (
                <>
                  <div key={index}>
                    <PosColumnCard CardData={data} />
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
      )}
    </>
  );
}

export default PosColumnSlider;
