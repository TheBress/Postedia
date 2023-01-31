import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/provider";
import { theme } from "./styles";
import { Provider } from "react-redux";
import store, { Persistor } from "./redux/store";
import { PersistGate } from "redux-persist/lib/integration/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={Persistor}>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
