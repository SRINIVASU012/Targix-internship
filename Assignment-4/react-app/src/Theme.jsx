import  { useContext } from "react";
import { AppContext } from "./AppContext";
import styled from "styled-components";

const ToggleButton = styled.button`
  padding: 10px 20px;
  border-radius: 20px;
  border: none;
  cursor: pointer;

  background: ${({ theme }) =>
    theme === "light" ? "#222" : "#ddd"};
  color: ${({ theme }) =>
    theme === "light" ? "#fff" : "#000"};
`;

 export const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <ToggleButton theme={theme} onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </ToggleButton>
  );
};

