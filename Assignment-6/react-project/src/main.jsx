import React from "react";
import ReactDOM from "react-dom/client";
import {App} from "./App";
import { ProductProvider } from "./ProductProvider";
import "antd/dist/reset.css";
import { ConfigProvider } from "antd";
import {GlobalStyles} from "./GlobleStyle";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#2E7D32",
        borderRadius: 10,
      },
    }}
  >
    <ProductProvider>
      <App />
      <GlobalStyles />
    </ProductProvider>
  </ConfigProvider>
);