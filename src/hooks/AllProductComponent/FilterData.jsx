import React, { createContext, useState } from "react";

export const FilterData = createContext();

export const FilterDataProvider = ({ children }) => {
  const [FilteredData, setFilteredData] = useState([]);
  const [FilterType, setFilterType] = useState("");

  // Apply filter based on the selected filter type
  const ApplyFilter = (filterType, data) => {
    if (data && filterType) {
      // Create a copy of the data array
      const sortedData = [...data];

      if (filterType === "priceLow") {
        sortedData.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      } else if (filterType === "priceHigh") {
        sortedData.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      } else if (filterType === "NameAsc") {
        sortedData.sort((a, b) =>
          a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
        );
      } else if (filterType === "NameDsc") {
        sortedData.sort((a, b) =>
          a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1
        );
      }

      setFilteredData(sortedData);
    }
  };

  return (
    <FilterData.Provider
      value={{
        FilterType,
        setFilterType,
        ApplyFilter,
        FilteredData,
        setFilteredData,
      }}
    >
      {children}
    </FilterData.Provider>
  );
};
