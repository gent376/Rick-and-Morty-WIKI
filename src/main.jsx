import { StrictMode } from "react";
import "./i18n";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// i18next.init({
//   interpolation: { escapeValue: false },
// });

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
