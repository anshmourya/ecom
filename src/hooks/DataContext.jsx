import { createContext, useState } from "react";
import axios from "axios";
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [Limit, setLimit] = useState();
  const [AllData, setAllData] = useState();
  const [Category, setCategory] = useState();
  const [CategoryData, setCategoryData] = useState();
  const [SpecificCategory, setSpecificCategory] = useState("electronics");

  const getAllData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setAllData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCategory = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      setCategory(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSpecficCategoryData = async (Category) => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/category/${Category}`
    );
    return response.data;
  };

  return (
    <DataContext.Provider
      value={{
        getAllData,
        getCategory,
        AllData,
        Category,
        getSpecficCategoryData,
        CategoryData,
        SpecificCategory,
        setSpecificCategory,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
