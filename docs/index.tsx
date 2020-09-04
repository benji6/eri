import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App";
import { EriProvider } from "../src";

ReactDOM.render(
  <EriProvider>
    <App />
  </EriProvider>,
  document.getElementById("root")
);
