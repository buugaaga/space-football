import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.tsx";
import "./main.css";
import { appTheme } from "./theme/theme.ts";
import { BrowserRouter } from "react-router-dom";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import "./i18n";
import { APP_URL } from "./shared/constants/api.constants.ts";
// import WebApp from "@twa-dev/sdk";

// WebApp.ready();

export function Root() {
  return (
    <TonConnectUIProvider manifestUrl={`${APP_URL}/tonconnect-manifest.json`}>
      <App />
    </TonConnectUIProvider>
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
