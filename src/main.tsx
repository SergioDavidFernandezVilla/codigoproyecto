import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

// CSS
import "./index.css";
import "./css/Mobil.css";
import "./css/PC.css";
import React from "react";

const container = document.getElementById("root");

if (!container) {
  throw new Error("No se encontró el elemento con id 'root'");
}

const root = createRoot(container);

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
