import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // home page
import SingleProduct from "./pages/SingleProduct";
import "./styles/style.css"; //main styles
import { DataProvider } from "./hooks/DataContext";
import { PosProvider } from "./hooks/PosHook";
import { PageDataProvider } from "./hooks/SingleProduct/PageData";

function App() {
  return (
    <>
      <DataProvider>
        <PosProvider>
          <PageDataProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<SingleProduct />} />
              </Routes>
            </BrowserRouter>
          </PageDataProvider>
        </PosProvider>
      </DataProvider>
    </>
  );
}

export default App;
