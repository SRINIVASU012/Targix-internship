import  { useContext } from "react";
import { AppContext } from "./AppContext";
import {styled}from "styled-components";
import { Card } from "./Cardbox";

const Button = styled.button`
  padding: 10px 15px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  background: ${({ theme }) =>
    theme === "light" ? "#007bff" : "#ff9800"};
  color: white;

  &:hover {
    opacity: 0.8;
  }
`;

 export const Counter = () => {
  const { count, increment, decrement, reset, theme } =
    useContext(AppContext);

  return (
    <Card theme={theme}>
      <h2>Counter: {count}</h2>
      <Button theme={theme} onClick={increment}>
        +
      </Button>
      <Button theme={theme} onClick={decrement}>
        -
      </Button>
      <button theme={theme} onClick={reset}>
        reset
      </button>
    </Card>
  );
};

