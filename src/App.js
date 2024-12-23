import React from "react";
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from './layouts/MainLayout';
import "./styles/main.scss";
import Home from "./pages/Home";
import About from "./pages/About";

// 전역 테마 설정
const theme = {
  colors: {
    primary: 'var(--primary-color)',
    text: 'var(--text-color)',
    headerBg: 'var(--header-bg-color)',
    footerBg: 'var(--footer-bg-color)',
  },
  fontFamily: 'Arial, sans-serif',
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/about" element={<MainLayout><About /></MainLayout>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;