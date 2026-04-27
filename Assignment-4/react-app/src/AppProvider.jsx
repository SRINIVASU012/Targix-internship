import { useState } from "react";
import { AppContext } from "./AppContext";
export const AppProvider = ({ children }) => {
  const [count, setCount] = useState(0);
 
  const [theme, setTheme] = useState("light");
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  const toggleTheme = () =>
    setTheme(theme === "light" ? "dark" : "light");

  return (
    <AppContext.Provider
      value={{ count, increment, decrement, reset, theme, toggleTheme }}
    >
      {children}
    </AppContext.Provider>
  );
};