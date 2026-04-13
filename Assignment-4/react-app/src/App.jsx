import  { useContext } from "react";
import { AppContext } from "./AppContext";
import { AppProvider } from "./AppProvider";
import {Header} from "./Header";
import {Counter} from "./Counter";
import { ThemeToggle } from "./Theme";
import { Global } from "./Global";
const AppContent = () => {
  const { theme } = useContext(AppContext);

  return (
    <>
      <Global theme={theme} />
      <Header />
      <ThemeToggle />
      <Counter />
    </>
  );
};
export const App = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}


 





