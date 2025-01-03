import React from "react";
import { ThemeProvider } from "styled-components";
import { HashRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import "./assets/styles/main.scss";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";

// 전역 테마 설정
const theme = {
  colors: {
    primary: "var(--primary-color)",
    text: "var(--text-color)",
    headerBg: "var(--header-bg-color)",
    footerBg: "var(--footer-bg-color)",
    point: `var(--point-color)`,
    border: "var(--border-color)",
  },
  fontFamily: "Arial, sans-serif",
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
          />
          <Route
            path="/product"
            element={
              <MainLayout>
                <Product />
              </MainLayout>
            }
          />
          <Route
            path="/detail"
            element={
              <MainLayout>
                <ProductDetail />
              </MainLayout>
            }
          />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;