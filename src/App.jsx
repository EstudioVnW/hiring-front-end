import React from "react";
import ECommerce from "./pages/home";
import { Route, Routes } from "react-router-dom";

import Cart from "./pages/cart";
import Header from "./components/header/index";
import GlobalStyle from "./styled";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route exact path="/" Component={ECommerce} />
        <Route exact path="/hiring-front-end" Component={ECommerce} />
        <Route exact path="/cart" Component={Cart} />
      </Routes>
    </>
  );
}
