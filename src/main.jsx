import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// CSS
import "./index.css";
import "./css/Mobil.css";
import "./css/PC.css";

import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
