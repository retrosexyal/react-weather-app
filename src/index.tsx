import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { HashRouter } from "react-router-dom";
import { Global, theme } from "./styles/global";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Global />
        <App />
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>
);
