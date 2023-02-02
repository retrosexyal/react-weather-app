import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { HashRouter } from "react-router-dom";
import { Global, theme } from "./styles/global";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <HashRouter>
          <Global />
          <App />
        </HashRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
