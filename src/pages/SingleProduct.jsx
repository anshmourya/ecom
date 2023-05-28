import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PageData } from "../hooks/SingleProduct/PageData";
import { NavForProvider } from "../hooks/SingleProduct/NavForContext";
import Nav from "../Components/Nav";
import MainImg from "../Components/SingleProductComponent/MainImg";
import SecondaryImg from "../Components/SingleProductComponent/SecondaryImg";
import ProductDesc from "../Components/SingleProductComponent/ProductDesc";
import MainDesc from "../Components/SingleProductComponent/MainDesc";
import PosProduct from "../Components/PosProduct/PosProduct";
function SingleProduct() {
  const { id } = useParams();
  const { getSingleProduct, SingleProduct, setSingleProduct } =
    useContext(PageData);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getSingleProduct(id);
      setSingleProduct(response);
    };
    fetchData();
    console.log(SingleProduct);
  }, [id]);
  return (
    <>
      <Nav />
      <div className="Product content">
        <div className="single-product">
          <NavForProvider>
            <MainImg />
            <SecondaryImg />
          </NavForProvider>
        </div>
        <ProductDesc productData={SingleProduct} />
      </div>
      <div className="main-product-desc content">
        <MainDesc desc={SingleProduct.desc} />
      </div>
      <div className="suggestion-slider content">
        <PosProduct />
      </div>
    </>
  );
}

export default SingleProduct;
