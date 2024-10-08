import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/assets/style/index.css";
import App from "@/components/particles/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
