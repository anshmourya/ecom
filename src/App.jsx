import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // home page
import SingleProduct from "./pages/SingleProduct"; // single product page
import AllProduct from "./pages/AllProduct"; // all products page
import Cart from "./pages/Cart"; // cart page
import "./styles/style.css"; //main styles
import { DataProvider } from "./hooks/DataContext";
import { PosProvider } from "./hooks/PosHook";
import { PageDataProvider } from "./hooks/SingleProduct/PageData";
import { CartDataProvider } from "./hooks/CartComponent/CartData";
function App() {
  return (
    <>
      <CartDataProvider>
        <DataProvider>
          <PosProvider>
            <PageDataProvider>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/product/:id" element={<SingleProduct />} />
                  <Route path="/allproduct" element={<AllProduct />} />
                  <Route path="/cart" element={<Cart />} />
                </Routes>
              </BrowserRouter>
            </PageDataProvider>
          </PosProvider>
        </DataProvider>
      </CartDataProvider>
    </>
  );
}

export default App;
