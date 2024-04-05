import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.tsx";
import "./main.css";
import { appTheme } from "./theme/theme.ts";
import { BrowserRouter } from "react-router-dom";
import "./i18n";
import WebApp from "@twa-dev/sdk";
import { SDKProvider, type SDKInitOptions } from "@tma.js/sdk-react";

WebApp.ready();

export function Root() {
  const options: SDKInitOptions = {
    acceptCustomStyles: true,
    cssVars: true,
  };

  return (
    <SDKProvider options={options}>
      <App />
    </SDKProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={appTheme}>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
