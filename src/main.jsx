import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Wrapper from "./layout/wrapper/Wrapper.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Wrapper>
      <BrowserRouter>
    <App />
  </BrowserRouter>
    </Wrapper>
  </StrictMode>
);
