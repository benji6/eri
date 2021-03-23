import "./style.css";
import * as React from "react";
import { EriStateContext } from "../EriProvider";

export default function Header(props: React.HTMLAttributes<HTMLDivElement>) {
  const state = React.useContext(EriStateContext);

  return (
    <header
      className={`e-header bs-1${
        state.navExists ? " e-header--nav-space" : ""
      }`}
    >
      <div {...props} className="e-header__container flex" />
    </header>
  );
}
