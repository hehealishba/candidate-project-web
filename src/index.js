import React from "react";
import ReactDOM from "react-dom/client";  // ✅ Use createRoot from "react-dom/client"
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));  // ✅ Use createRoot
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
