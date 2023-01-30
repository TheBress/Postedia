import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/provider";
import { theme } from "./styles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
