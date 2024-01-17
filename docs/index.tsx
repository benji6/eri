import * as ReactDOM from "react-dom/client";
import App from "./components/App";
import { shuffleBackgroundMesh } from "../src";

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);

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
