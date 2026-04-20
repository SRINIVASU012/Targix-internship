import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Page1} from "./Page1"
import {Page2} from "./Page2";


export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/confirm" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
}


