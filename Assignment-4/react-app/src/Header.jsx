import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import styled from "styled-components";

const HeaderBox = styled.div`
  padding: 20px;
  text-align: center;
  background: ${({ theme }) =>
    theme === "light" ? "#6200ea" : "#121212"};
  color: white;
`;

export const Header = () => {
  const { theme } = useContext(AppContext);

  return (
    <HeaderBox theme={theme}>
      <h1>Styled Context App</h1>
    </HeaderBox>
  );
};

