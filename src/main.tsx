import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { registerSW } from "virtual:pwa-register";

const updateSW = registerSW({
  onNeedRefresh() {
    updateSW(true);
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
        rel="stylesheet" />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
