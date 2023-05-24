import axios from "axios";
import React, { createContext, useState } from "react";

export const PageData = createContext();

export const PageDataProvider = ({ children }) => {
  const [SingleProduct, setSingleProduct] = useState([]);

  const getSingleProduct = async (id) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response.data;
  };

  return (
    <PageData.Provider
      value={{ getSingleProduct, SingleProduct, setSingleProduct }}
    >
      {children}
    </PageData.Provider>
  );
};
