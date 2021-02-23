import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Router";
import "./assets/css/styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);
