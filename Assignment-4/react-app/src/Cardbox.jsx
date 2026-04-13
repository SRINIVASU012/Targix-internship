import {styled} from "styled-components";

export const Card = styled.div`
  background: ${({ theme }) =>
    theme === "light" ? "#fff" : "#333"};
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  transition: 0.3s;
`;
