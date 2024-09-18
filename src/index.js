import "bootstrap/dist/css/bootstrap.css";
import "./Components/Scss/custom.scss";
import React from "react";
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
