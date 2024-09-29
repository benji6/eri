import * as ReactDOM from "react-dom/client";
import App from "./components/App";
import { shuffleBackgroundMesh } from "../src";

const rootEl = document.getElementById("root");
if (!rootEl) throw Error("no root element");
ReactDOM.createRoot(rootEl).render(<App />);

onload = () => {
  let { href } = document.location;
  new MutationObserver(() => {
    if (href === document.location.href) return;
    href = document.location.href;
    shuffleBackgroundMesh();
  }).observe(document.body, {
    childList: true,
    subtree: true,
  });
};
