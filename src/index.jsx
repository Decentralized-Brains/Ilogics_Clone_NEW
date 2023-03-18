import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import GoToTop from "./components/GoToTop";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className=" fixed -right-[0%] top-[80%] rotate-[270] z-50">
        <GoToTop />
      </div>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
