import "./style.css";
import * as React from "react";
import { StateContext } from "../EriProvider";

export default function Header(props: React.HTMLAttributes<HTMLDivElement>) {
  const state = React.useContext(StateContext);
  const className = `e-header${
    state.menuExists ? " e-header--menu-space" : ""
  }`;

  return (
    <header className={className}>
      <div {...props} className="e-header__container" />
    </header>
  );
}
