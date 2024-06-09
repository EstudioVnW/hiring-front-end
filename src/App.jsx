import React from "react";
import { ECommerce } from "./pages/home";
import { Route, Router, Routes, Switch } from "react-router-dom";

import Cart from "./pages/cart";
import Header from "./components/header/index";
import Footer from "./components/footer/index";
import GlobalStyle from "./styled";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route exact path="/" Component={ECommerce} />
        <Route exact path="/cart" Component={Cart} />
      </Routes>
      <Footer />
    </>
  );
}
