import "./style.css";
import * as React from "react";
import { StateContext } from "../EriProvider";

export default function Main(props: React.HTMLAttributes<HTMLElement>) {
  const state = React.useContext(StateContext);
  const className = `e-main${state.menuExists ? " e-main--menu-space" : ""}`;

  return <main {...props} className={className} />;
}
