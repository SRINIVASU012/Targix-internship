import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: ${({ theme }) =>
      theme === "light" ? "#f4f4f4" : "#1e1e1e"};
    color: ${({ theme }) =>
      theme === "light" ? "#000" : "#fff"};
    transition: all 0.3s ease;
  }
`;