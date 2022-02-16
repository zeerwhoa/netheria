import { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { setupQueryClient } from "@/utils/query";
import "./index.css";
import App from "./App";

render(
  <StrictMode>
    <QueryClientProvider client={setupQueryClient()}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
  document.getElementById("root")
);
