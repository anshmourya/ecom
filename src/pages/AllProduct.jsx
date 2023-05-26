import React from "react";
import Nav from "../Components/Nav";
import FilterNav from "../Components/AllProductComponet/FilterNav";
import ProductList from "../Components/AllProductComponet/ProductList";
import { FilterDataProvider } from "../hooks/AllProductComponent/FilterData";

function AllProduct() {
  return (
    <>
      <Nav />
      <FilterDataProvider>
        <FilterNav />
        <div className="content">
          <ProductList />
        </div>
      </FilterDataProvider>
    </>
  );
}

export default AllProduct;
