import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App"
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    capri: "#00c0f9",
    tomato: "#ff6347",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
