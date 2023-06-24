import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./i18n/config";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
function setTheme(theme) {
  document.body.setAttribute("data-theme", theme);
}
root.render(
  <React.StrictMode>
    <App setTheme={setTheme} />
  </React.StrictMode>
);
