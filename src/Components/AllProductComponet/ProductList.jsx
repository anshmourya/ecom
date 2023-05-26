import React, { useContext, useEffect } from "react";
import { DataContext } from "../../hooks/DataContext";
import { FilterData } from "../../hooks/AllProductComponent/FilterData";
import PosCard from "../PosProduct/PosCard";

function ProductList() {
  const { getAllData, AllData } = useContext(DataContext);
  const { FilteredData, setFilteredData, FilterType, ApplyFilter } =
    useContext(FilterData);

  useEffect(() => {
    const fetchData = async () => {
      await getAllData();
      setFilteredData(AllData);
    };

    if (!FilteredData || FilteredData.length === 0) {
      if (!AllData || AllData.length === 0) {
        fetchData();
      } else {
        setFilteredData(AllData);
      }
    }
  }, [AllData, FilteredData]);

  useEffect(() => {
    ApplyFilter(FilterType, AllData);
  }, [FilterType]);

  return (
    <>
      <div className="product-list">
        {FilteredData &&
          FilteredData.map((data) => (
            <PosCard CategoryData={data} key={data.id} />
          ))}
      </div>
    </>
  );
}

export default ProductList;
