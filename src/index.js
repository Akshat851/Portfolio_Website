import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Grommet } from "grommet";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Grommet>
      <App />
    </Grommet>
  </React.StrictMode>
);
