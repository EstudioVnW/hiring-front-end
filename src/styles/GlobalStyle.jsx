import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    a {
        text-decoration: none;
        color: currentColor;
    }
    h1,
    h2,
    h3,
    h4,
    h5 {
        line-height: 1;
    }
    body {
        font-family: "Poppins", Arial, Helvetica, sans-serif;
        background-color: #ffffff;
    }
    button {
        font-family: "Poppins", Arial, Helvetica, sans-serif;
    }
`   