import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Poppins", sans-serif;
    background-color: #F1F8E9;
  }

  h1, h2, h3 {
    margin: 0;
    color: #2E7D32;
  }

  button {
    border-radius: 8px;
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background: #A5D6A7;
    border-radius: 10px;
  }
`;