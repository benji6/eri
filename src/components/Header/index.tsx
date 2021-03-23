import "./style.css";
import * as React from "react";
import { EriStateContext } from "../EriProvider";

export default function Header(props: React.HTMLAttributes<HTMLDivElement>) {
  const state = React.useContext(EriStateContext);
  const className = `e-header${state.navExists ? " e-header--nav-space" : ""}`;

  return (
    <header className={className}>
      <div {...props} className="e-header__container" />
    </header>
  );
}
