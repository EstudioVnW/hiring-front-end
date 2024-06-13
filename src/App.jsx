/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import { createGlobalStyle } from "styled-components";
import Head from "./Components/Header/Header";
import Shop from "./Components/Shop/Shop";
import Home from "./Components/Home/home";
import Footer from "./Components/Footer/Footer";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: Sora, sans-serif;
  }
`;

export default function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <GlobalStyle />

      <Head setSearch={setSearch} />
      <Home />
      <Shop search={search} />
      <Footer/>
    </>
  );
}
