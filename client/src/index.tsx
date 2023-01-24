import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../src/state";
import { Provider } from "react-redux";
import "./App.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const store = configureStore({
  reducer: authReducer,
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
